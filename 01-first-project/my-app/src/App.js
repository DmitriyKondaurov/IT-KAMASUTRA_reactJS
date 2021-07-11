// import logo from './logo.svg';
// import React, {Component} from "react";
import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </div>);
};

export default App;
