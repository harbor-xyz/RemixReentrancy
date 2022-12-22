//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

// TODO: exploit to take someone else's balance
contract Bank {
    mapping(address => uint256) private userBalances;

    function greet() public view returns (string memory) {
        return "hello world";
    }

    function deposit() external payable {
        userBalances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 userBalance = userBalances[msg.sender];

        require(userBalance > 0, "User balance insufficient for withdrawal");

        (bool success, bytes memory payload) = msg.sender.call{
            value: userBalance
        }("");
        require(success, string(payload));

        userBalances[msg.sender] = 0;
    }

    function getBalance() public view returns (uint256) {
        uint256 balance = userBalances[msg.sender];
        return balance;
    }
}
