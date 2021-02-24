pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KajalContract is ERC20 {
    
    constructor() public ERC20("KajalToken", "KPB") {
        _mint(msg.sender, 10 * (10 ** uint256(decimals())));
    }
}