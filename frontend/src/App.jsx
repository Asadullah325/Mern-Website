import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menus from "./Pages/Menus";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating a delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};



export default App;
