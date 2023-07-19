import React from 'react'
import './Session.css'
const Session = (props) => {
    return (
        <div className='session glass'>
                <img
                    src={props.imgsrc}
                    alt="4518760-open-opensource-source-icon"
                    border={0}
                    className='logoImg'
                />
            <p className={'heading-2'} style={{color:props.headingColor}}>{props.heading}</p>
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default Session