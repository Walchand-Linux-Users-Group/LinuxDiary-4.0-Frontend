import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
      <>
          
          {/*Hey! This is the original version
of Simple CSS Waves*/}
          <div className="header">
              {/*Content before waves*/}
              <div className="inner-header flex">
                  <img src="./images/WLUG_black.png" alt="logo" />
              </div>
              {/*Waves Container*/}
              <div>
                  <svg
                      className="waves"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 24 150 28"
                      preserveAspectRatio="none"
                      shapeRendering="auto"
                  >
                      <defs>
                          <path
                              id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                          />
                      </defs>
                      <g className="parallax">
                          <use
                              xlinkHref="#gentle-wave"
                              x={48}
                              y={0}
                              fill="#6EA9FF"
                          />
                          <use
                              xlinkHref="#gentle-wave"
                              x={48}
                              y={3}
                              fill="#97C1FF"
                          />
                          <use
                              xlinkHref="#gentle-wave"
                              x={48}
                              y={5}
                              fill="#D1E1FE"
                          />
                          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#318CFE" />
                      </g>
                  </svg>
              </div>
              {/*Waves end*/}
          </div>
          {/*Header ends*/}
          {/*Content starts*/}
          <div className="content flex">
          </div>
          {/*Content ends*/}
          {/* partial */}
      </>

  )
}

export default Hero