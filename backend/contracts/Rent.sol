// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/IBlockImob.sol";
import "./interfaces/IERC20.sol";

contract Rent {
    
    IBlockImob public immutable blockImob;
    
    address public immutable renter;
    
    address public immutable gov;
    
    uint256 public immutable tokenId;
    
    uint256 public expires;
    
    uint256 public price;

    uint128 public monthsLeft;
    
    IERC20 constant paymentToken =
        IERC20(0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787);

    mapping(uint256 => bool) public monthPaid;

    error MonthNotPaid(string text,uint256 month );

    event MonthPaid(uint256 indexed month);
    event RentEnded(address indexed _party);

    constructor(
        address _renter,
        address _gov,
        uint256 _tokenId,
        uint256 _expires,
        uint256 _price
    ) {
        _cutInMonths(_expires);
        renter = _renter;
        gov = _gov;
        tokenId = _tokenId;
        expires = _expires;
        price = _price;
        blockImob = IBlockImob(msg.sender);
    }

    function payRent() external payable {
        require(msg.sender == renter, "Rent: Not renter");
        require(monthsLeft > 0, "Rent ended");
        require(
            !(paymentToken.allowance(msg.sender, address(this)) < price),
            "Rent: Insuficient allowance"
        );
        require(!monthPaid[monthsLeft], "Rent: Month paid");

        monthPaid[monthsLeft] = true;
        bool success = paymentToken.transferFrom(msg.sender, gov, price);
        require(success, "Rent:Transaction incomplete");


        address fii = blockImob.returnFiiAddress(tokenId);
        if(fii != address(0)){
            success = paymentToken.transfer(fii, (price*95)/100);
            require(success, "Rent: Fii payment errored");
        }

        emit MonthPaid(monthsLeft);
    }

    function endRent() external {
        if (!blockImob.returnAllowed(msg.sender)) {
            uint256 months = expires / 30 days + 1;

            for (uint256 i = 1; i < months; ++i) {
                if (!monthPaid[i]) {
                    // revert("Rent: Month(s) not paid");
                    revert MonthNotPaid({text:"Rent: Month not paid", month:i});
                }
            }
        }

        blockImob.setUser(tokenId, address(0), 0);

        blockImob.updateTokenDeal(
            tokenId,
            IBlockImob.DealType.RENT,
            address(0),
            address(0)
        );

        (bool success) = paymentToken.transfer(gov, paymentToken.balanceOf(address(this)));
        require (success, "Withdraw not successful");

        emit RentEnded(msg.sender);
        selfdestruct(payable(gov));
    }


    function _cutInMonths(uint256 _timestamp) internal {
        require (_timestamp > (block.timestamp + 30 days), "Rent: Can't rent less than 30 days");

        monthsLeft = uint128((_timestamp - block.timestamp)/2678400);
    }
}
