import React, { useContext } from 'react';
import './index.css';
import logo from '../Assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';


const Header = () => {






    return (
        <div className='nav'>
            <div className='header-first'>
                <div>
                    <img className='logo-image' src={logo} alt="Logo" />
                </div>
                <div className='header-second'>
                    <NavLink to="/">  HOME</NavLink>
                    <NavLink to="/about">  ABOUT</NavLink>
                </div>
            </div>
            <div className='header-last'>
                <NavLink to="/products">  PRODUCTS</NavLink>
                <NavLink to="/contact">  CONTACT</NavLink>
                <NavLink to="/cart">  CART</NavLink>

            </div>
        </div >
    )
}





export default Header
