import '../Styles/Navbar.css'
import {motion} from 'framer-motion'

export default function Navbar() {
    return(
        <div className="Navbar">
            <h1>AJ</h1>
            <ul>
                <button className='activeNav'>Portfolio</button>
                <button className='activeNav'>Testimonials</button>
                <button className='activeNav'>About Me</button>
            </ul>
            <div className='btn'>
                <motion.button 
                    whileHover={{backgroundColor:["#fff", "var(--pink)"], color:["var(--pink)", "#fff"], scale:1.2, transition:{duration:.3}}} 
                    whileTap={{scale:0.9}}>
                    Get in Touch
                </motion.button>
            </div>
        </div>
    )
}