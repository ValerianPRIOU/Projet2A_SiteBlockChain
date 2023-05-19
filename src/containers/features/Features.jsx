import React from 'react';
import './features.css';
import {Feature} from "../../components";

const featuresData = [
    {
        title: 'Supply Chain Transparency',
        text: 'Blockchain can increase transparency and traceability in supply chains, helping to prevent counterfeit goods, improve product quality, and ensure ethical sourcing and fair labor practices.'
    },
    {
        title: 'Data Privacy',
        text: 'Blockchain can provide individuals with greater control over their personal data by enabling secure and decentralized data storage and sharing, reducing the risks of data breaches and unauthorized access.'
    },
    {
        title: 'Energy Trading',
        text: 'Blockchain has the potential to disrupt the energy sector by enabling peer-to-peer energy trading, reducing reliance on traditional utilities and increasing efficiency in energy markets.'
    },
    {
        title: 'Healthcare Records',
        text: 'Blockchain can enhance the security, privacy, and interoperability of healthcare records, improving patient privacy, data sharing, and healthcare outcomes.'
    }

]

const Features = () => {
    return (
        <div className = "bc__features section__padding" id="features">
            <div className = "bc__features-heading">
                <h1 className = "gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className = "bc__features-container">
                {featuresData.map((item, index) => (
                    <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features