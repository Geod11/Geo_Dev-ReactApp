import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Header from './Components/Header';
//import Footer from './Components/Footer';
//import React, { useState } from 'react';
// import Clock from './Components/Clock';
// import AboutPage from './Pages/About';
import {
  //BrowserRouter,
  Routes,
  Route,
  // Link,
  //NavLink
} from "react-router-dom";


function App() {

  return (
   <>
   <Header />
   <div className='container'>
      <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
      </Routes>

    </div>
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



// const [currentState , updateStateFunction] = useState(100)

// function decrementCurrentState() {
//   updateStateFunction(previousCurrentState => previousCurrentState - 1)
// }

// function incrementCurrentState() {
//   updateStateFunction(previousCurrentState => previousCurrentState + 1)
// }

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


export default App;
