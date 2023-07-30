import React from 'react'
import './Rewards.css'
import Register from './Register'
const Rewards = () => {
    function handleRegister() {
        const register = document.getElementById('register'); // Change 'targetElement' to the actual ID of your target element

        if (register) {
            register.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div className='rewards-main'>
                <div className='plain-heading'>Participate and win</div>
                <div className='rewards'>
                    <div className='card small'>
                        <img src='./images/swags.png' alt='swags' />
                        <h2>Exciting swags</h2>
                    </div>
                    <div className='card large'>
                        <img src='./images/merchandise.png' alt='merch' />
                        <h2>Interesting
                            Merchandise</h2>
                    </div>
                    <div className='card small'>
                        <img src='./images/cash-prize.png' alt='cash' />
                        <h2>Cash Prizes</h2>
                    </div>
                </div>
            </div>
            <div className='register'>
                <button className="btn-hover color-3" onClick={handleRegister} id='register-button'>Register Now</button>
            </div>
            <div>
                <Register />
                <div className='imgg'>
                    <img src="./images/footer-new.png" alt="sand" />
                </div>
            </div></>
    )
}

export default Rewards