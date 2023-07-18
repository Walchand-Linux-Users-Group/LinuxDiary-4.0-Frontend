import React from 'react'
import './Rewards.css'
const Rewards = () => {
    function handleRegister() {
        console.log('Register')
    }
    return (
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
            <div className='register'>
                <button class="btn-hover color-2" onClick={handleRegister}>Register Now</button>
            </div>
            <div className='imgg'>
                <img src="./images/footer.png" alt="sand" />
            </div>
        </div>
    )
}

export default Rewards