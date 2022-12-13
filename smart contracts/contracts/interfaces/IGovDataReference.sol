// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//Contract será Interface referente a consulta se estao regulares ou nao
interface IGovDataReference {

    event ConsultMapRural(
      uint256 indexed _registryRural
    );

    event ConsultImobReg(
      uint256 indexed _idImob
    );

    event confrontMapEvent(
      string _map,
      uint256 indexed _registryRural
    );

    function ConsultRegular(uint256 _idImob)
    external 
    view
    returns (
      bool regular
    );

    function consultMap(uint256 _registryRural)
    external 
    view
    returns (
      bool regular
    );

    function confrontMap(string memory _map, uint256 _registryRural)
    external 
    returns (
      bool regular,
      string memory
    );

}
