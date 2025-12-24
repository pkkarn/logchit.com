# Introduction to Consensus

Blockchain networks require a mechanism for all participants to agree on the current state of the distributed ledger. This agreement process, known as consensus, is fundamental to maintaining the integrity and security of any decentralized system. Without a robust consensus mechanism, malicious actors could potentially manipulate the network, double-spend tokens, or corrupt the transaction history.

## Proof of Work (PoW)

Proof of Work was the first consensus mechanism, pioneered by Bitcoin. In PoW, miners compete to solve complex mathematical puzzles, with the winner earning the right to add the next block to the chain. While incredibly secure due to its computational requirements, PoW has been criticized for its massive energy consumption. The difficulty of these puzzles adjusts dynamically to maintain consistent block times, regardless of the total network hash power.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleConsensusExample {
    struct Block {
        uint256 timestamp;
        bytes32 previousHash;
        bytes32 dataHash;
        uint256 nonce;
    }
    
    Block[] public blockchain;
    uint256 public difficulty = 2;
    
    function mineBlock(bytes32 _dataHash) external {
        bytes32 previousHash = blockchain.length > 0 
            ? keccak256(abi.encode(blockchain[blockchain.length - 1]))
            : bytes32(0);
            
        uint256 nonce = 0;
        bytes32 hash;
        
        // Simplified PoW concept
        do {
            nonce++;
            hash = keccak256(abi.encodePacked(
                block.timestamp,
                previousHash,
                _dataHash,
                nonce
            ));
        } while (uint256(hash) > type(uint256).max / difficulty);
        
        blockchain.push(Block({
            timestamp: block.timestamp,
            previousHash: previousHash,
            dataHash: _dataHash,
            nonce: nonce
        }));
    }
}
```

## Proof of Stake (PoS)

Proof of Stake represents a paradigm shift in blockchain consensus. Instead of competing through computational power, validators are selected based on the amount of cryptocurrency they "stake" as collateral. This approach dramatically reduces energy consumption—Ethereum's transition to PoS reduced its energy usage by approximately 99.95%. Validators are incentivized to act honestly because malicious behavior results in "slashing," where a portion of their staked assets is destroyed. The economic security model of PoS aligns validator incentives with network health, creating a more sustainable and scalable consensus mechanism.
