import React from 'react';
import './Header.css';
import headIcon from '../../assets/header.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Header = () => {
  
  return (
    <>
        <div className="contain header" id='header' data-aos="zoom-out-right">
            <div className="row mt-5">
                <div className="head mt-5">
                <img src={headIcon} alt="" />
                    <h1>Hi, I'm <span> Abdul Hannan</span>,<br/> I'm a front end developer.</h1>
                    <p>Crafting digital experiences that inspire and innovate, one line of code at a time.</p>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'><button className="btn btn-outline-warning me-2"> Connect with me</button></AnchorLink>
                    
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Header;