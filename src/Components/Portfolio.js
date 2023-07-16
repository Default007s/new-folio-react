import '../Styles/portfolio.css'
import { motion } from 'framer-motion'
import stepholt from '../images/stepholt1.png'
import jochum from '../images/jochum1.png'
import renvo from '../images/renvo1.jpg'
import zain from '../images/zain1.png'

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <h1>Portfolio</h1>
      <div className='portContainer'>
        
        <div className='port1 port'>
          <motion.img 
          initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
          whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
          whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
          src={renvo}></motion.img>        
        </div>
        
        <div className='port2 port'>
          <motion.img 
          initial = {{ marginTop: 50,opacity: 0 }} 
          whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
          whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
          src={jochum}></motion.img>        
        </div>
        
        <div className='port3 port'>
          <motion.img 
          initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
          whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
          whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
          src={stepholt}></motion.img>        
        </div>
        
        <div className='port4 port'>
          <motion.img 
          initial = {{ scale: 1, marginTop: 50,opacity: 0 }} 
          whileInView = {{ margin: 0, opacity: 1, transition:{ duration:1 }}} 
          whileHover={{filter:['grayscale(1)', 'grayscale(0)'], scale:[1, 1.1], zIndex:[0, 1]}} 
          src={zain}></motion.img>        
        </div>
      </div>
    </div>
  )
}

