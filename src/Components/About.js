import '../Styles/About.css'
import me from '../images/me.webp'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className='info'>
            <h1>Ahmed Jalal</h1>
            <h2><span className='pinked'>Pakistan</span> based Front End Web Developer focused on <span className='pinked'>React</span></h2>
            <p>I'm Ahmed Jalal. It is never easy for a young boy to get out of his comfort zone and explore the world. But I am proud that with the help of god I have overtaken this challenge. As a young freelancer, I create websites that generate more clients to help entrepreneurs who want to have a one-of-a-kind social media presence.</p>
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

