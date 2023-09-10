// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Greet{
    string public greet;

    function setGreet(string memory _greet) public{
        greet = _greet;
    }
}
