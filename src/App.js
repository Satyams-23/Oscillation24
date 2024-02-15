import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Rule from "./Components/Rule/Rule.js";
import Track from "./Components/Track/Track.js";
import Contact from "./Components/Contact/Contact.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Rule />} path="/rule" />
        <Route element={<Track />} path="/track" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;
