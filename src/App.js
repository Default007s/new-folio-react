import './Styles/App.css';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AnimCursor from './Components/AnimCursor';
import TestimonialContainer from './Components/TestimonialContainer';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <AnimCursor/>
      <Navbar/>
      <Hero />
      <Portfolio />
      <TestimonialContainer />
      <About />
      <Footer />
    </div>
  );
}

export default App;
