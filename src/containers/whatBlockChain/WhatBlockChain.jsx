import React from 'react';
import './whatBlockChain.css';
import {Feature} from '../../components';
const WhatBlockChain = () => {
    return (
        <div className="bc__whatblockchain section__margin" id="wbc">
            <div className="bc__whatblockchain-feature">
                <Feature title = "What is a Blockchain" text = "A blockchain is a decentralized and transparent digital ledger system that uses cryptography to secure transactions and records. It allows for data to be recorded in an immutable, transparent, and verifiable manner without the need for trusted intermediaries, making it resistant to manipulation and fraud."/>
            </div>
            <div className="bc__whatblockchain-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="bc__whatblockchain-container">
                <div className = "Row"><Feature title = "Security" text = "Blockchain technology is highly secure, using cryptography, consensus mechanisms, and decentralized architecture to ensure tamper-proof transactions and data integrity."/></div>
                <div className = "Row"><Feature title = "Transparency" text = "Transparency is a key feature of blockchains, where all transactions and data are recorded on a decentralized and immutable ledger visible to all participants. This enhances trust, accountability, and allows for real-time verification without intermediaries. It has potential applications in supply chain management, finance, healthcare, and voting systems, promoting fraud detection and accountability."/></div>
                <div className = "Row"><Feature title = "Consensus" text = "Consensus is a vital concept in blockchain, where all participants agree on the validity of transactions and the state of the ledger. Different consensus mechanisms like PoW, PoS, DPoS, and BFT are used to achieve agreement among network participants. Consensus prevents double spending and maintains the integrity of the blockchain. It is crucial for ensuring the security, transparency, and reliability of blockchain networks."/></div>
            </div>
        </div>
    )
}

export default WhatBlockChain