import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
        <header className="app-header">
          <img src='https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-spa-logo-png-image_4721219.png'  alt='logo' width='50'/>
        </header>
        <nav className="app-nav">
            <div>
                <a href="/">Profile</a>
            </div>
            <div>
                <a href="/">Messages</a>
            </div>
            <div>
                <a href="/">Feed</a>
            </div>
            <div>
                <a href="/">Music</a>
            </div>
            <div>
                <a href="/">Settings</a>
            </div>
        </nav>
        <div className="app-content">
            <img src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'/>
            <div>ava + description</div>
            <div>my posts</div>
            <div>New post</div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    </div>
  );
}

export default App;
