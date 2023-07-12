import half from '../images/main.png'
import '../Styles/Hero.css'
import {motion} from "framer-motion"

export default function Hero() {
    return(
        <div className='heroContainer'>
            <div className='Hero'>
                <button>
                    <motion.img 
                        animate={{ scale:[1,.4,1], transform:["rotate(0deg)", "rotate(180deg)", "rotate(360deg)"], filter: ["grayscale(1)", "grayscale(0)", "grayscale(1)"] }}
                        transition={{duration:5, repeat:Infinity, ease:"linear"}}
                        src={half}>
                    </motion.img>
                </button>
            </div>
            <h3>Front End Web Developer</h3>
        </div>
    )
}