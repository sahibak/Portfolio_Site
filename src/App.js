import React from 'react';
import './App.css';
import Header from "./Components/Header/header.js";
import AboutMe from "./Components/AboutMe/aboutMe.js";
import Projects from "./Components/Projects/projects.js";
import Footer from "./Components/Footer/footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
