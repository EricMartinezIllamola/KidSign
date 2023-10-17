import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {CgProfile} from 'react-icons/cg';
import '../styles/Login.css'

import { useTranslation } from 'react-i18next';

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [t, i18n] = useTranslation("main"); //traduccion

  return isAuthenticated ? (
    <button className="ButtonLogin" onClick={() => logout({ returnTo: "http://localhost:3000/" } ) }>
      <CgProfile/>LogOut
      {/* {t("Navbar.Logout")} */}
    </button>
  ) : (
    <button onClick={loginWithRedirect} className="ButtonLogin">
        <CgProfile/>  Login
        {/* {t("Navbar.Login")} */}
    </button>
  );
};

export default AuthenticationButton;
