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
  function init() {
    new SmoothScroll(document, 80, 20)
  }
  init();
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement
        || document.documentElement
        || document.body.parentNode
        || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
      && document.documentElement
      ? document.documentElement
      : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }


  // function handleRegister() {
  //   const register = document.getElementById('register'); // Change 'targetElement' to the actual ID of your target element

  //   if (register) {
  //     register.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  
  // document.addEventListener('scroll', function () {
  //   console.log(window.scrollY);
  //   const b1 = document.querySelector('.b1');
  //   const b2 = document.querySelector('.b2');
  //   if (window.scrollY > 2890) {
  //     b1.style.visibility = 'hidden';
  //     b2.style.visibility = 'visible';
  //   } else {
  //     b1.style.visibility = 'visible';
  //     b2.style.visibility = 'hidden';
  //   }
  // }, {
  //   passive: true
  // });
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
      {/* <div className='register'>
        <button className="btn-flush b1" onClick={handleRegister}>
          <div class="left"></div>
          Register Now
          <div class="right"></div>
        </button>
        <button className="btn-flush b2" onClick={handleRegister}>
          <div class="left"></div>
          Register Now
          <div class="right"></div>
        </button>
      </div> */}
      <Register />
      <div className='imgg'>
        <img src="./images/footer-new.png" alt="sand" />
      </div>
      <Footer />
    </>
  );
}

export default App;
