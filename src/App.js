
import './App.css';
import Bubbles from './Bubbles';
import Hero from './Hero.js';
import Rewards from './Rewards';
import Roadmap from './Roadmap';
import Wargames from './Wargames';
function App() {

  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);
  return (
    <>
      <Hero />
    <div className='colorsec'>
          <Bubbles />
      {/* <div className='header titlebox'> */}
        <div className='glass titlebox'>
        <h1>Linux Diary 4.0</h1>
        <h2>#Explore The Linux Realm</h2>
      </div>
      <Roadmap />
      <Wargames />
      <Rewards />
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
