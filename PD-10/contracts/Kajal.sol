pragma solidity ^0.6.0;



import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



/// @author Kajal's Token

contract KajalERC20 is ERC20 {



constructor() public ERC20("Kajalstruffles", "SSFF") {

_mint(msg.sender, 100000 * (10 ** uint256(decimals())));

}

}