import React from 'react';
import './App.css';
import { Box, theme } from '@chakra-ui/react';
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

      <Box id="skills">
        <Skills />
      </Box>
      <Box id="about">
        <AboutMe />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="contacts">
        <Contacts />
      </Box>

      <Footer />

      {/* <Flex marginTop="16" flexDir="column">
        <Flex
          id="1"
          bgColor={'background'}
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Home />
        </Flex>
        <Flex
          id="2"
          pt="16"
          bgColor={'background'}
          height="100vh"
          justifyContent="center"
        >
          <AboutMe />
        </Flex>
        <Flex
          id="3"
          bgColor={'background'}
          height="100vh"
          pt="16"
          justifyContent="center"
        >
          <Projects />
        </Flex>
        <Flex
          id="4"
          bgColor={'background'}
          height="100vh"
          pt="16"
          justifyContent="center"
        >
          <Contacts />
        </Flex>
      </Flex> */}
    </>
  );
}

export default App;
