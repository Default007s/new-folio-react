import half from '../images/main.webp'
import '../Styles/Hero.css'
import {motion} from "framer-motion"

export default function Hero() {
    return(
        <div className='heroContainer'>
            <div className='Hero'>
                <button aria-label="Ahmed Jalal">
                    <motion.img 
                        animate={{ scale:[1,.4,1], transform:["rotate(0deg)", "rotate(180deg)", "rotate(360deg)"], filter: ["grayscale(1)", "grayscale(0)", "grayscale(1)"] }}
                        transition={{duration:5, repeat:Infinity, ease:"linear"}}
                        src={half}
                        alt="Ahmed Jalal">
                    </motion.img>
                </button>
            </div>
            <h3>Front End Web Developer</h3>
        </div>
    )
}