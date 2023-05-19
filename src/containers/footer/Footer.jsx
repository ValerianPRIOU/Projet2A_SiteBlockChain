import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
import Provenhance from '../../assets/Provenhance.png';

const Footer = () => {
    return (
        <div className = "bc__footer section__padding">
            <div className = "bc__footer-heading">
                <h1 className = "gradient__text">Do you want to step in to the future before others?</h1>
            </div>

            <div className = "bc__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className = "bc__footer-links">
                <div className = "bc__footer-links_logo">
                    <img src={Provenhance} alt="logo"/>
                    <p>Cergy-Pontoise, 3 rue de la Justice Pourpre, All Rights Reserved</p>
                </div>

                <div className = "bc__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className = "bc__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Social Privacy & Policy</p>
                    <p>Contact</p>
                </div>

                <div className = "bc__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Cergy-Pontoise, 3 rue de la Justice Pourpre</p>
                    <p>06 69 69 69 69</p>
                    <p>INeedMoney@payme.net</p>
                </div>

                <div className = "bc__footer-copyright">
                    <p>© 2023 Provenhance. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer