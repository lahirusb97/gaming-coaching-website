import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <About />
      <Packages />
      <Contact />
    </div>
  );
}

export default App;
