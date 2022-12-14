// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


import "./interfaces/IGovDataReference.sol";

contract ConsultImob{


IGovDataReference public govData;

///@dev setar o endereço do OráculoGov
constructor(IGovDataReference _govData){
  govData = IGovDataReference(_govData);
}


function consultRegular(uint256 _idImob) public view returns(bool){
    bool regularinter = govData.ConsultRegular(_idImob);
    return regularinter;
}


function confrontMap(string memory _map, uint256 _registryRual) public returns(bool, string memory){
    //bool regularinter = govData.confrontMap(_map, _registryRual);
    return (govData.confrontMap(_map, _registryRual));
}

function consultMap(uint256 _registryRural)
external view returns (bool){
  bool regularinter = govData.consultMap(_registryRural);
  return regularinter;
}


}