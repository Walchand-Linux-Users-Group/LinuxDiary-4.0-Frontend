import React from 'react'
import Session from './Session'
import './Roadmap.css'
const Roadmap = () => {
  return (
    <div>
      <div className='info '>
        <div className='heading-1'>Session Roadmap</div>
        <div className='flex'>
          <Session
            imgsrc="./images/S1.png"
            heading="Session 1: Open Source 101"
            headingColor="#7eff50"
            text="Worried about being an absolute beginner in Linux? Don't fret! We've got you covered with a beginner-friendly session that serves as the perfect introduction to open-source and Linux. You'll gain a solid foundation and discover real-life applications of these technologies." />
          <Session
            imgsrc="./images/S2.png"
            heading="Session 2: Echo Linux"
            headingColor="#FFEF00"
            text="With a strong foundation in place, we will dive into the world of Linux, empowering you with comprehensive knowledge of crucial commands, the booting process, text editors, process management, and the seamless integration of pipelining techniques."
          />
        </div>
        <div className='flex'>
          <Session
            imgsrc="./images/S3.png"
            heading="Session 3: The File Maze"
            headingColor="#FFD5FB"
            text="Guess what? Everything in Linux is a file! Here we'll explore the file system in Linux. In this enlightening session, we will familiarise ourselves with file systems, groups, users, and the diverse range of commands vital for their successful management."
          />
          <Session
            imgsrc="./images/S4.png"
            heading="Session 4:NetVerse"
            headingColor="#E5FF2C"
            text="Seeking knowledge and excitement? Join our captivating journey through the intricate worlds of GUI and CLI, unveiling the remarkable advantages of CLI. Together, we'll explore advanced commands, essential networking techniques, and many more." />
        </div>
      </div>
    </div>
  )
}

export default Roadmap