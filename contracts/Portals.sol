pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Portals is ERC20 {
    constructor(uint256 initialSupply) ERC20("Portals", "PRTL") public {
        _mint(msg.sender, initialSupply);
    }
}
