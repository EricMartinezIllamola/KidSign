import React from 'react';
import "../styles/App.css";
import Navbar from './Navbar';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Carousel from './pages/Carousel';
import About from './pages/About';
import Team from './pages/Team';
import Footer from "./Footer";



const Main = () => {
    return (
        <div className="main_div">
            <Navbar />
            <Home />
            <Carousel />
            <About />
            <Team />
            <Footer />
        </div>
    )
}

export default Main;
