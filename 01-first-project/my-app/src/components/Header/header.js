import React from 'react';

function Header() {
    return (
        <header className="Custom-header">
            <ul>
                <li>
                    <a className="App-link" href="https://reactjs.org" target="_blank" >Home</a>
                </li>
                <li>
                    <a className="App-link" href="https://reactjs.org" target="_blank" >News</a>
                </li>
                <li>
                    <a className="App-link" href="https://reactjs.org" target="_blank" >Feed</a>
                </li>
                <li>
                    <a className="App-link" href="https://reactjs.org" target="_blank" >Messages</a>
                </li>
            </ul>
        </header>
    )
}
export default Header;