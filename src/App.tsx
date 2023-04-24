import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import NavBar from './components/units/NavBar';
import Home from './components/sections/Home';
import AboutMe from './components/sections/AboutMe';
import Contacts from './components/sections/Contacts';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Box id="home">
        <Home />
      </Box>

      <Box id="skills" pt="30px">
        <Skills />
      </Box>
      <Box id="about" pt="30px">
        <AboutMe />
      </Box>

      <Box id="projects" pt="30px">
        <Projects />
      </Box>

      <Box id="contacts" pt="30px">
        <Contacts />
      </Box>

      <Footer />
    </>
  );
}

export default App;
