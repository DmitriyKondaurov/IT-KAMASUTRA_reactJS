import React from 'react';
import './App.css';
import Technologies from "./components/Technologies/technologies";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
