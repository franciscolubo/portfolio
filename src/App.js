import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <a name="about" id="about"></a>
      <About />
      <a name="projects" id="projects"></a>
      <div></div>
      <Projects />
      <a name="contact" id="contact"></a>
      <Contact />
    </div>
  );
}

export default App;
