import React, {useState} from 'react';
import Provenhance from '../../assets/Provenhance.png';
import FAT from '../../assets/ProvenhanceBIG.png';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => (
    <>
    <p><a href = "#home">Home</a></p>
    <p><a href = "#wbc">What is a Blockchain?</a></p>
    <p><a href = "#features">Case Studies</a></p>
    <p><a href = "#possibility">Possibilities</a></p>
    <p><a href = "#blog">Library</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className = "bc__navbar">
            <div className = "bc__navbar-links">
                 <div className = "bc__navbar-links-logo">
                     <img src={Provenhance} alt="Provenhance"/>
                 </div>
                <div className = "bc__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className = "bc__navbar-sign">
                <p>Sign in</p>
                <button type = "button">Sign up</button>
            </div>
            <div className="bc__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size = {27} onClick = {() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size = {27} onClick = {() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                <div className = "bc__navbar-menu_container scale-up-center">
                    <div className="bc__navbar-menu_container-links">
                        <Menu />
                        <div className = "bc__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type = "button">Sign up</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar