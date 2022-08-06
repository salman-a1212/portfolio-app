import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Project />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default App;
