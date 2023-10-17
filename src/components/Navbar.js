import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import uk from '../assets/uk.png';
import spain from '../assets/spain.png';
import { CgProfile } from 'react-icons/cg';
import Login from '../components/Login'

import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  }


  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [t, i18n] = useTranslation("main"); //traduccion

  return (
    <nav className='Navbar'>
      <div className='languagebtn-container nav_item'>
        <button className='uknav nav_lng' onClick={() => {handleChangeLng("en")}}> <img src={uk} className='nav_lng' alt='' id='uknav' /> </button>
        <button className='spainnav nav_lng' onClick={() => {handleChangeLng("es")}}> <img src={spain} className='nav_lng' alt='' id='spainnav' /> </button>
      </div>
      <Link to='Home' className='nav_item nav_link'> {t("Navbar.Home")} </Link>
      <Link to='About' className='nav_item nav_link'> About Us </Link>
      <Link to='Team' className='nav_item nav_link'> Team </Link>
      <Login />
    </nav>
  )
}

export default Navbar;
