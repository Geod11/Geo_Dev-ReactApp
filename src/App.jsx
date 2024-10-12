import "./App.css";
import React from "react";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import NotFound from "./Components/Pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}


