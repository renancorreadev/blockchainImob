// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./Sell.sol";
import "./Rent.sol";
import "./interfaces/IBlockImob.sol";
import "./interfaces/IGovDataReference.sol";

contract PaymentsManagement {
    IBlockImob blockImobContract;
    IGovDataReference oracleConsult;

    event Rented(
        uint256 indexed tokenId,
        address indexed renter,
        uint256 period,
        uint256 price
    );
    event SellDeployed(
        address indexed party,
        address indexed buyer,
        address indexed seller,
        address sellContract,
        uint256 amount
    );

    constructor(address _blockImob, address _oracleconsult) {
        blockImobContract = IBlockImob(_blockImob);
        oracleConsult = IGovDataReference(_oracleconsult);
    }

    modifier onlyAllowed() {
        require(blockImobContract.returnAllowed(msg.sender), "PayM: Not allowed");
        _;
    }

    modifier validateTokenId(uint256 _tokenId) {
        require(
            _tokenId < blockImobContract.nextTokenId(),
            "PayM: Invalid tokenId"
        );
        _;
    }

    modifier validateAddress(address _address) {
        require(_address != address(0), "PayM: Invalid address");
        _;
    }

    function sellToken(
        uint256 _tokenId,
        address _from,
        address _to,
        address _moderatorFrom,
        address _moderatorTo,
        uint256 _amount
    )
        external
        onlyAllowed
        validateTokenId(_tokenId)
        validateAddress(_from)
        validateAddress(_to)
        validateAddress(_moderatorFrom)
        validateAddress(_moderatorTo)
    {
        require(oracleConsult.ConsultRegular(_tokenId) == true, "not regularized");
        Sell sell = new Sell(
            _to,
            _from,
            _moderatorTo,
            // _moderatorFrom,
            address(blockImobContract),
            _tokenId,
            _amount,
            msg.sender
        );

        blockImobContract.updateTokenDeal(
            _tokenId,
            IBlockImob.DealType.SELL,
            address(sell),
            address(0)
        );

        emit SellDeployed(msg.sender, _to, _from, address(sell), _amount);
    }

    function rentToken(
        uint256 _tokenId,
        address _renter,
        uint256 _days,
        uint256 _rentPrice
    ) external onlyAllowed validateTokenId(_tokenId) validateAddress(_renter) {
        require(_days > 0, "PayM: 0 days given");
        require(oracleConsult.ConsultRegular(_tokenId) == true, "not regularized");

        uint256 expires = block.timestamp + _days * 1 days;

        Rent rent = new Rent(
            _renter,
            msg.sender,
            _tokenId,
            expires,
            _rentPrice
        );

        blockImobContract.setUser(_tokenId, _renter, uint64(expires));

        blockImobContract.updateTokenDeal(
            _tokenId,
            IBlockImob.DealType.RENT,
            address(rent),
            address(0)
        );

        emit Rented(_tokenId, _renter, _days, _rentPrice);
    }
}
