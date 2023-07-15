import '../Styles/Testimonials.css'
import { motion } from 'framer-motion'

export default function Testimonials({ name, country, rating, statement}) {
  return (
    <motion.div className='Testimonial' 
    initial = {{ marginTop: 50,scale: .8 ,opacity: 0 }} 
    whileInView = {{ margin: 0, scale: 1, opacity: 1 }} 
    whileHover={{ scale: 1.2, opacity: 1 , transition: { duration: 0.3}}}
    transition = {{ duration:1 }}>
      <h2>{name}</h2>
      <h3>{country}</h3>
      <h3 className='rating'>{rating}</h3>
      <p>{statement}</p>
    </motion.div>
  )
}

