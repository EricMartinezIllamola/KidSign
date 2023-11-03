import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Navbar.css';
import {Link} from 'react-scroll';
import uk from '../assets/uk.png';
import spain from '../assets/spain.png';
import Login from '../components/Login';
import {FaBars} from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  }

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [t, i18n] = useTranslation("main"); //traduccion

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='Navbar'>
      <div className='languagebtn-container nav_item'>
        <button className='uknav nav_lng' onClick={() => {handleChangeLng("en")}}> <img src={uk} className='nav_lng' alt='' id='uknav' /> </button>
        <button className='spainnav nav_lng' onClick={() => {handleChangeLng("es")}}> <img src={spain} className='nav_lng' alt='' id='spainnav' /> </button>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <FaBars/>
      </div>
      <div className={`nav-elements nav-item  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <Link to="Home" className='nav_link'>{t("Navbar.Home")}</Link>
          </li>
          <li>
            <Link to="About" className='nav_link'>{t("AboutUs")}</Link>
          </li>
          <li>
            <Link to="Team" className='nav_link'> Team </Link>
          </li>
        </ul>
      </div>
      <Login/>
    </nav>
  )
}

export default Navbar;
