import React from 'react'
import './Bubbles.css'
import Hero from './Hero.js';
import Rewards from './Rewards';
import Roadmap from './Roadmap';
import Wargames from './Wargames';
import Footer from './Footer';
const Bubbles = () => {
  return (
    <>
      <Hero />
      <div className='canvas'>
        <div className='glass titlebox'>
          <img src="./images/WLUG_black.png" alt="logo" />
          <div>
            <h1>Linux Diary 4.0</h1>
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
        <Footer />
      </div></>
  )
}

export default Bubbles