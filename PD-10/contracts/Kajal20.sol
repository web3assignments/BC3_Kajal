pragma solidity ^0.6.0;



import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



/// @author Kajal's Token

contract Kajal20 is ERC20 {



constructor() public ERC20("KPB20", "KPB") {

_mint(msg.sender, 10000 * (10 ** uint256(decimals())));

}

}
