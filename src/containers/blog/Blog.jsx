import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
    return (
        <div className = "bc__blog section__padding" id = "blog">
            <div className = "bc__blog-heading">
                <h1 className = "gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className = "bc__blog-container">
                <div className = "bc__blog-container_groupA">
                    <Article imgUrl = {blog01} date = "Apr 08,2023" title = "Demystifying Decentralized Blockchains: Understanding the Basics and Beyond" />
                </div>
                <div className = "bc__blog-container_groupB">
                    <Article imgUrl = {blog02} date = "Jan 27,2023" title = "The future of Finance: Decentralized Blockchains and Their Disruptive Potential"/>
                    <Article imgUrl = {blog03} date = "Feb 17,2023" title = "Revolutionizing Security: Exploring the Role of Blockchains in Enhancing Cybersecurity"/>
                    <Article imgUrl = {blog04} date = "Mar 03,2023" title = "Redefining Trust in the Digital Age: The Rise of Decentralized Blockchains"/>
                    <Article imgUrl = {blog05} date = "Apr 02,2023" title = "Managing Risks in a Decentralized World: The Security Implications of Blockchain"/>
                </div>
            </div>
        </div>
    )
}

export default Blog