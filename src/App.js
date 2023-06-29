import './Styles/App.css';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AnimCursor from './Components/AnimCursor';



function App() {
  return (
    <div className="App">
      <AnimCursor/>
      <Navbar/>
      <Hero />
    </div>
  );
}

export default App;
