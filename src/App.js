import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
