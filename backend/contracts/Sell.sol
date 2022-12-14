// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./interfaces/IBlockImob.sol";
import "./interfaces/IERC20.sol";

contract Sell {
    address public immutable buyer;
    address public immutable seller;
    address public buyerMediator;
    // address public sellerMediator;
    IBlockImob public immutable blockImob;
    IERC20 constant paymentToken =
        IERC20(0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787);
    uint256 public immutable tokenId;
    uint256 public price;
    address public immutable gov;
    mapping(address => bool) public sellApproved;

    event PriceSet(address indexed party, uint256 newPrice);
    event SetSellApproved(address indexed party, bool approved);
    event SellExecuted(address indexed party, uint256 currPrice);

    constructor(
        address _buyer,
        address _seller,
        address _buyerMediator,
        // address _sellerMediator,
        address _token,
        uint256 _tokenId,
        uint256 _price,
        address _gov
    ) {
        buyer = _buyer;
        seller = _seller;
        buyerMediator = _buyerMediator;
        // sellerMediator = _sellerMediator;
        blockImob = IBlockImob(_token);
        tokenId = _tokenId;
        price = _price;
        gov = _gov;
    }

    modifier checkAddress(address _party) {
        require(
            _party == buyer ||
                _party == seller ||
                _party == buyerMediator 
                //|| _party == sellerMediator
                ,
            "Sell: Not allowed"
        );
        _;
    }

    function setPrice(uint256 _newPrice) external checkAddress(msg.sender) {
        price = _newPrice;

        emit PriceSet(msg.sender, _newPrice);
    }

    function setApproveSell(bool _approved) external checkAddress(msg.sender) {
        sellApproved[msg.sender] = _approved;

        emit SetSellApproved(msg.sender, _approved);
    }

    function executeSell() external checkAddress(msg.sender) {
        require(
            !(paymentToken.allowance(msg.sender, address(this)) < price),
            "Rent: Insuficient allowance"
        );
        if (
            (sellApproved[buyer] && sellApproved[seller]) ||
            // (sellApproved[buyer] && sellApproved[sellerMediator]) ||
            (sellApproved[seller] && sellApproved[buyerMediator]) ||
            (sellApproved[buyerMediator] /*&& sellApproved[sellerMediator]*/)
        ) {
            paymentToken.transferFrom(msg.sender, gov, price);

            emit SellExecuted(msg.sender, price);
            selfdestruct(payable(gov));
        }
    }
}
