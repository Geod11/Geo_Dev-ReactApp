import './App.css';
//import React, { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Clock from './Components/Clock';
import { Routes, Route } from "react-router-dom";

export default function App() {

  // const [currentState , updateStateFunction] = useState(100)

  // function decrementCurrentState() {
  //   updateStateFunction(previousCurrentState => previousCurrentState - 1)
  // }
  
  // function incrementCurrentState() {
  //   updateStateFunction(previousCurrentState => previousCurrentState + 1)
  // }

  return (
   <>
       <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
       </Routes>
  {/* <h2>Add or subtract:</h2>
      <button onClick={decrementCurrentState}>-</button>
      <span>{currentState}</span>
      <button onClick={incrementCurrentState}>+</button>
    <Clock /> */}
    <Footer />
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
