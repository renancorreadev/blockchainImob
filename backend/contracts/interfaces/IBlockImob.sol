// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./IERC4907.sol";

interface IBlockImob is IERC4907 {
    enum DealType {
        RENT,
        SELL
    }

    struct Deal {
        DealType dealType;
        address dealAddress;
        address fiiAddress;
    }

    struct Query {
        string district;
        uint256 registry;
    }

    event UpdatedTokenURI(
        uint256 indexed tokenId,
        string indexed newURI,
        string newURIText,
        string newValue
    );
    event UpdatedBaseURI(string indexed newBaseURI, string newBaseURIText);
    event UpdatedTokenDeal(
        uint256 indexed tokenId,
        DealType dealType,
        address indexed dealAddress,
        address indexed fiiAddress
    );

    function returnAllowed(address _party) external view returns (bool);

    function nextTokenId() external view returns (uint256);

    function updateTokenDeal(
        uint256 _tokenId,
        DealType _dealType,
        address _dealAddress,
        address _fiiAddress
    ) external;

    function returnFiiAddress(uint256 _tokenId) external view returns(address);
}
