import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import NotFound from "./Components/Pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import Test from "./Components/Pages/Test";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const Theme = {
    colors: {
      green: "#008000",
      gray: "#808080",
    },
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        {/* <Test /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );

  /* <Routes>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes> */

  // function Home() {
  //   return <h2>Home</h2>;
  // }

  // function About() {
  //   return <h2>About</h2>;
  // }

  // function Projects() {
  //   return <h2>Projects</h2>;
  // }

  // function Skills() {
  //   return <h2>Skills</h2>;
  // }

  // function Contact() {
  //   return <h2>Contact</h2>;
  // }
}

/* <Header/>
      <h1>Add or subtract:
      </h1>
      <button onClick={decrementCurrentState}>-</button>
      <span>{currentState}</span>
      <button onClick={incrementCurrentState}>+</button>
      <Clock></Clock>
<Footer/>*/

/* <>
<nav>
     <ul>
       <li>
         <NavLink to="/">{<Home />}</NavLink>
       </li>
       <li>
         <NavLink to="About">{<About />}</NavLink>
       </li>
       <li>
         <NavLink to="/Projects">{<Projects />}</NavLink>
       </li>
       <li>
         <NavLink to="/Skills">{<Skills />}</NavLink>
       </li>
       <li>
         <NavLink to="/Contact">{<Contact />}</NavLink>
       </li>
     </ul>
</nav>
</> */

//export default App;
