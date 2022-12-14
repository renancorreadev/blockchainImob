// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


import "./interfaces/IGovDataReference.sol";
import "./BlockImob.sol"; //passar o endereço do contrato dos imóveis nas funções

//simulação de oráculo off-chain

//  * @title OracleGov
//  * @notice Based on the BlockImob contract
//  * @notice this contract is for verification of the properties by authorized entities
//  * other contract's ability to read data from an
//  * aggregator contract, but how the aggregator got
//  * 
//  */

contract OracleGov is IGovDataReference{



  IGovDataReference govData;
  BlockImob imob; //primeiro deployar esse que vai ter os dados dos imóveis

  uint256 public numberMapRegularRural;
  uint256 public numberImobRegular;
  string mapRegular; //variável do mapa do imóvel rural que está correto


  mapping(uint256 => bool) ConsultIdregular;
  mapping(uint => bool) registryMapRegular;
  mapping(address => bool) allowed;

  constructor(){
    allowed[msg.sender] = true;
  }

//map de area rural da união e confrontando com o mapa inserido pelos endereços do oráculo
  function confrontMap(string memory _map, uint256 _registryRural)
  external 
  override OnlyAllow returns(bool, string memory){
    if(compareStrings(mapRegular, _map)==true){
    // registryMapRegular[_registryRural] = true;
    ++numberMapRegularRural;
    return(true, "regular");
    }
    return(registryMapRegular[_registryRural], "irregular");
  }

//setar um metadado que vou criar o NFT.storage
//https://bafkreie7ylmkqhbixuz7svqv6wsw5atitzcuij7m4iqrvvu3bc4re2p3qy.ipfs.nftstorage.link/
function setMapRural(string memory _maprural)OnlyAllow external{
  mapRegular = _maprural;
}
//consulta se ele está regular o imóvel Rural
function consultMap(uint256 _registryRural)external virtual
    view 
    override
    returns (
      bool regular
    ){
      return(registryMapRegular[_registryRural]);
}
  
  //imóvel sem ser rurarl --------
  function setRegular(uint256 _idImob, bool _regular, address _imobcontract) external OnlyAllow{
    imob = BlockImob(_imobcontract);
    string memory UriExist = imob.tokenURI(_idImob);
    require(bytes(UriExist).length > 0, "BlockImob: nonexistent");
    if(_regular == true){
      ++numberImobRegular;
    }else{ 
      --numberImobRegular;
    }
    ConsultIdregular[_idImob] = _regular;
  }


  function ConsultRegular(uint256 _idImob)
    external virtual
    view 
    override returns (bool regular){
      
      return(ConsultIdregular[_idImob]);
  }
  
   //Helpers e inserir os endereços gov-- vai chegcar se a string de a encodada vai ser a de b.
  function compareStrings(string memory a, string memory b) internal pure returns(bool){
      return (keccak256(abi.encodePacked(a)) ==  keccak256(abi.encodePacked(b)));
  }

  function setAllow(address _addr, bool _allow)external OnlyAllow{
    allowed[_addr] = _allow;
  }

//modifiers ----
  modifier OnlyAllow() {
        require(allowed[msg.sender], "not gov address allowed");
    _;
  }
}