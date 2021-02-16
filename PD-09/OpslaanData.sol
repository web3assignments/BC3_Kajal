pragma solidity ^0.6.0;

import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

/// @title simple way of storing and viewing data with permissions
/// @author Kajal
/// @notice dont use this contract for real use it only implements the basics to show some working function for the assignment
/// @dev Functions are working but for web usage eth that gets send needs to be coded
contract OpslaanData is Initializable {
/// @author Kajal
/// @notice kill contract and deposit only works if you are the owner
/// @dev working application in remix

    string private gegevens;

    address payable public owner;
   
   function initialize() public initializer {
   owner = msg.sender;
    }   

 modifier onlyOwner() {
     require(msg.sender == owner, "not owner");
     _;
 }
    
 function setGegevens(string memory _gegevens) public onlyOwner {
        gegevens = _gegevens;
    }
    
 function getGegevens() public view returns (string memory) {
        return gegevens;
    }
    //can only be used by the owner to kill the contract
    //commented because zepplin cant compile with this
    //function close() public { 
    //selfdestruct(owner); 
    //}
 }
