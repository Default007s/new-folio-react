import '../Styles/portfolio.css'
import { motion } from 'framer-motion'
import stepholt from '../images/stepholt1.webp'
import jochum from '../images/jochum1.webp'
import renvo from '../images/renvo1.webp'
import zain from '../images/zain1.webp'

export default function Portfolio() {
  return (
    <div id='portfolio' className='Portfolio'>
      <h1>Portfolio</h1>
      <div className='portContainer'>
        
        <a target="_blank" href="#">
          <div className='port1 port'>
            <motion.img
              loading='lazy' 
              initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
              whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
              whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
              src={renvo}
              alt="1st project : A Web App">
            </motion.img>
          </div>
        </a>
        
        <a target="_blank" href="#">
          <div className='port2 port'>
            <motion.img
              loading='lazy' 
              initial = {{ marginTop: 50,opacity: 0 }} 
              whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
              whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
              src={jochum}
              alt="2nd project : A Web Designer's Portfolio">
            </motion.img>
          </div>
        </a>
        
        <a target="_blank" href="https://stephanieholt.netlify.app/" rel="noreferrer">
          <div className='port3 port'>
            <motion.img
              loading='lazy' 
              initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
              whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
              whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
              src={stepholt}
              alt="3rd project : A Web Developer's Portfolio">
            </motion.img>
          </div>
        </a>
        
        <a target="_blank" href="https://zainnaqvi.netlify.app/" rel="noreferrer">
          <div className='port4 port'>
            <motion.img
              loading='lazy' 
              initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
              whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
              whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
              src={zain}
              alt="4th project : A Vector Artist's Portfolio">
            </motion.img>
          </div>
        </a>
      </div>
    </div>
  )
}

