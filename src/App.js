import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;