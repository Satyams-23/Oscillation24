import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import PreLoader from "./Components/PreLoader/PreLoader.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3000ms
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Routes>
        {isLoading ? (
          <Route path="/" element={<PreLoader />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
