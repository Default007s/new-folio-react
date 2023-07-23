import '../Styles/Navbar.css'
import {motion} from 'framer-motion'

export default function Navbar() {
    return(
        <div className="Navbar">
            <h1>AJ</h1>
            <ul>
                <li><button tabindex="-1" className='activeNav'><a href='#portfolio'>Portfolio</a></button></li>  
                <li><button tabindex="-1" className='activeNav'><a href='#testimonialContainer'>Testimonials</a></button></li>    
                <li><button tabindex="-1" className='activeNav'><a href='#about'>About Me</a></button></li>   
            </ul>
            <div className='btn'>
                <a target="_blank" href='https://calendly.com/ahmedjalal' rel="noreferrer">
                    <motion.button 
                        whileHover={{backgroundColor:["#fff", "var(--pink)"], color:["var(--pink)", "#fff"], scale:1.2, transition:{duration:.3}}} 
                        tabindex="-1"
                        whileTap={{scale:0.9}}>
                        Get in Touch
                    </motion.button>
                </a>
            </div>
        </div>
    )
}