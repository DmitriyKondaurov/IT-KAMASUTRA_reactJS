// import logo from './logo.svg';
// import React, {Component} from "react";
import React from "react";
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://img.freepik.com/free-vector/chain-logo-design_1465-159.jpg?size=626&ext=jpg" alt=""/>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Messages</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
            <main className='content'>
                <div>
                    <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
                </div>
                <div>ava + discription</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
                <div></div>
            </main>
            <footer className='footer'>
                This is footer
            </footer>
        </div>
    );
};

export default App;
