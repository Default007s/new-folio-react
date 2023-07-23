import Testimonial from "./Testimonial"
import testimonialData from "../testimonialData"
import "../Styles/TestimonialContainer.css"

function TestimonialContainer() {
    
    const testimonials = testimonialData.map(testimonial => {
        return <Testimonial {...testimonial} randomNumber = {Math.floor(Math.random() * 50)} />
    })
    return (
        <div id="testimonialContainer" className="TestimonialContainerDiv">
            <h1>Testimonials</h1>
            <div className="TestimonialContainer">
                {testimonials}   
            </div>
        </div>
    )
}

export default TestimonialContainer