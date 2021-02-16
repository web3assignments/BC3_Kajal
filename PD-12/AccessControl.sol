pragma solidity 0.7.0;
/// @title accesscontrol bewaard gegevens en haalt gegevens op

// een eenvoudige contract om te laten zien dat de accescontrol werkt

//import library raw van zepplin als dit want anders werkt het niet in remix
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/access/Ownable.sol";

contract OpslaanData is Ownable{
    string private gegevens;

    constructor() public Ownable() {
  
    }
    
    //accescontrol
    function setGegevens(string memory _gegevens) public Ownable {
        gegevens = _gegevens;
    }

    function getGegevens() public view returns (string memory) {
        return gegevens;
    }
}

