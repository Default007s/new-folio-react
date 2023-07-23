import '../Styles/About.css'
import me from '../images/me.webp'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className='info'>
            <h1>Ahmed Jalal</h1>
            <h2><span className='pinked'>Pakistan</span> based Front End Web Developer focused on <span className='pinked'>React</span></h2>
            <p>Nostrud reprehenderit eiusmod fugiat ea dolore magna culpa officia reprehenderit nulla non. Pariatur excepteur ad laboris elit incididunt aliqua laborum excepteur. Ad ipsum ipsum nisi anim in laborum cillum. Excepteur nisi consequat cupidatat aliqua ad reprehenderit irure. In sint labore amet sint. Ad irure officia minim sit reprehenderit voluptate quis cupidatat ut laborum ad irure est ad. Magna esse ut aliquip magna non. Do id officia velit ex laboris. Duis nisi sint amet voluptate nisi deserunt id voluptate mollit incididunt consequat.</p>
            <h2 id='aboutQuote'>If <span className='pinked'>Passion</span> drives you, let <span className='pinked'>Reason</span> hold the reins</h2>
            <a href="mailto:ahmedjalal0322@gmail.com?subject = Feedback">
              <motion.button 
                target="_blank"
                whileHover={{backgroundColor:["var(--pink)", "#fff"], color:["#fff", "var(--pink)"], scale:1.2, transition:{duration:.3}}} 
                whileTap={{scale:0.9}}>
                  ahmedjalal0322@gmail.com
              </motion.button>
            </a>
        </div>
        <div className='aboutImage'>
            <img alt="Ahmed Jalal" loading='lazy' src={me}></img>
        </div>
    </div>
  )
}

