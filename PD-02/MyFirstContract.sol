pragma solidity 0.5.12;

contract Text {

    string public words;

    function Text(string allWords) public {
        words = allWords;
    }
  
  	function setWords(string newText) public {
      words = newText;

    function getWords() public view returns (string) {
        return words;
    }

}
