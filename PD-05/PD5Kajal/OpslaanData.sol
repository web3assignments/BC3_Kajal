pragma solidity 0.7.0;

contract OpslaanData{
    string private gegevens;

    function setGegevens(string memory _gegevens) public {
        gegevens = _gegevens;
    }

    function getGegevens() public view returns (string memory) {
        return gegevens;
    }
}
