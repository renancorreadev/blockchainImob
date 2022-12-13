// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./ERC721.sol";
import "./interfaces/IBlockImob.sol";
import "./Fii.sol";


contract FiiManagement is ERC721 {
    IBlockImob blockImobContract;


    mapping (uint256 => address) public FiiAddress;
    mapping(uint256 => string) public tokenIdToURI;
    string public baseURI;
    uint256 public nextTokenId = 1; // 0 for token no longer active
    address immutable gov;


    event FiiCreated(uint256 indexed _type, address indexed _address);
    event UpdatedBaseURI(string indexed newBaseURI, string newBaseURIText);
    event UpdatedTokenURI(
        uint256 indexed tokenId,
        string indexed newURI
    );

    constructor(address _blockImob, address _gov) ERC721("Fii Brazil Gov","Fii"){
        blockImobContract = IBlockImob(_blockImob);
        gov = _gov;
    }

    modifier onlyAllowed() {
        require(blockImobContract.returnAllowed(msg.sender), "Fii Management: Not allowed");
        _;
    }

    modifier validateTokenId(uint256 _tokenId) {
        require(_tokenId < nextTokenId, "BlockImob: Invalid tokenId");
        _;
    }

    modifier validateURI(string memory _uri) {
        require(bytes(_uri).length > 0, "BlockImob: No URI given");
        _;
    }

    function createFii(uint256 _type, string memory _name, string memory _symbol, uint8 _decimals) external onlyAllowed{
        require(FiiAddress[_type] == address(0),"Fii Management: Fii type already have a valid address");

        _safeMint(address(this), nextTokenId);
        nextTokenId++;

        Fii fii = new Fii(_name,_symbol,_decimals,address(blockImobContract),gov);

        FiiAddress[_type] = address(fii);

        emit FiiCreated(_type, address(fii));
    }

    function setBaseURI(string memory _newBaseURI) external onlyAllowed {
        baseURI = _newBaseURI;
        emit UpdatedBaseURI(_newBaseURI, _newBaseURI);
    }

    function setTokenURI(
        uint256 _tokenId,
        string memory _uri,
        string memory _newValue
    ) external onlyAllowed validateTokenId(_tokenId) validateURI(_uri) {
        require(
            bytes(_newValue).length > 0,
            "BlockImob: No value added/updated"
        );
        tokenIdToURI[_tokenId] = _uri;
        emit UpdatedTokenURI(_tokenId, _newValue);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        validateTokenId(_tokenId)
        returns (string memory)
    {
        return (
            bytes(baseURI).length == 0
                ? tokenIdToURI[_tokenId]
                : string(abi.encodePacked(baseURI, _tokenId, ".json"))
        );
    }

    function killFii(uint256 _type) external onlyAllowed{
        require(FiiAddress[_type] != address(0),"Fii Management: Fii type doesn't have a valid address");

        Fii(FiiAddress[_type]).killFii();
    }


}
