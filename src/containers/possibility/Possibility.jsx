import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className = "bc__possibility section__padding" id = "possibility">
            <div className = "bc__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <div className = "bc__possibility-content">
                <h4>Request Early Access To Get Started</h4>
                <h1 className = "gradient__text">The possibilities are beyond your imagination</h1>
                <p>The possibilities of blockchain technology are truly limitless, extending far beyond what most people can imagine. With its decentralized, transparent, and secure nature, blockchain has the potential to revolutionize industries such as supply chain management, finance, healthcare, and more. From eliminating intermediaries to enhancing traceability and accountability, blockchain is unlocking new frontiers of innovation and transforming the way we do business. The future of blockchain is bright, and the opportunities it presents are only limited by our imagination.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
}

export default Possibility