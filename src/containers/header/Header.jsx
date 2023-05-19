import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import head from '../../assets/head.png';

const Header = () => {
    return (
        <div className="bc__header section__padding" id = "home">
            <div className="bc__header-content">
                <h1 className="gradient__text"> Let's build something amazing with the BlockChain Technology</h1>
                <p>Blockchain is a revolutionary technology that enables decentralized and transparent record-keeping using cryptography. It eliminates the need for intermediaries, providing a secure and verifiable way to record and verify transactions and data. With its potential to enhance transparency, security, and efficiency, blockchain has the ability to transform industries beyond just finance and has become a significant innovation in the digital world.</p>

                <div className ="bc__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className = "bc__header-content__people">
                    <img src={people} alt="people"/>
                    <p>1,600 people requested access a visit in the last 24 hours</p>
                </div>
            </div>
            <div className="bc__header-image">
                    <img src={head} alt="ai"/>
            </div>
        </div>
    )
}

export default Header