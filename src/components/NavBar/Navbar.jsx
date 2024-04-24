import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuIcon from '../../assets/menu-icon.png'
const Navbar = () => {
    const [menu, setmenu] = useState("home")
    


  const [mob, setmob] = useState (false)
  const toggleMenu =  ()=>{
    mob? setmob(false):setmob(true);
    
  }

    return (
        <>

            <nav className="navBar contain ">
                <h2 className='logo'>Abdul <span> Hannan</span></h2>
                <ul className={`listItem ${mob?'':'hide_menu'}` }>
                    <li> <AnchorLink className='anchor-link' offset={50} href='#header'> <p onClick={() => { setmenu('home') }}>Home</p></AnchorLink>{menu == 'home' ? <p className='under'>_</p> : <></>}</li>
                    <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={() => { setmenu('about') }}>About</p></AnchorLink>{menu == 'about' ? <p className='under'>_</p> : <></>}</li>
                    <li> <AnchorLink className='anchor-link' offset={50} href='#mywork'> <p onClick={() => { setmenu('project') }}> Project</p></AnchorLink>{menu == 'project' ? <p className='under'>_</p> : <></>}</li>
                    <li> <AnchorLink className='anchor-link' offset={50} href='#skills'> <p onClick={() => { setmenu('skills') }}>Skills</p></AnchorLink>{menu == 'skills' ? <p className='under'>_</p> : <></>}</li>
                    <button className='btn btn-outline-warning' onClick={() => { setmenu('contact') }}> <AnchorLink className='anchor-link' offset={50} href='#contact'>contact me</AnchorLink>{menu == 'contact' ? <></> : <></>}</button>
                </ul>
                <img onClick={toggleMenu} src={menuIcon} className='menuIcon' style={{ width: "40px" }} alt="" />
            </nav>
        </>
    )
}

export default Navbar