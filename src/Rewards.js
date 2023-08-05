import React from 'react'
import './Rewards.css'
const Rewards = () => {

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
            </>
    )
}

export default Rewards