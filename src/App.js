import React from 'react'
import './App.css';
import './Bubbles.css'
import './Button.css'
import Hero from './Hero.js';
import Rewards from './Rewards';
import Roadmap from './Roadmap';
import Wargames from './Wargames';
import Footer from './Footer';
import Register from './Register';
function App() {
  function handleRegister() {
    const register = document.getElementById('register'); // Change 'targetElement' to the actual ID of your target element

    if (register) {
      register.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (

    <>
      <Hero />
      <div className='glass titlebox'>
        <img src="./images/WLUG_black.png" alt="logo" />
        <div>
          <h1>LinuxDiary 4.0</h1>
          <h2>#Explore The Linux Realm</h2>
        </div>
      </div>
      <Roadmap />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <Wargames />
      <Rewards />
      <div className='register'>
        <button className="btn-flush" onClick={handleRegister}>
          <div class="left"></div>
          Register Now
          <div class="right"></div>
        </button>
      </div>
      <Register />
      <div className='imgg'>
        <img src="./images/footer-new.png" alt="sand" />
      </div>
      <Footer />
    </>
  );
}

export default App;
