import { Box, Flex } from '@chakra-ui/react';
import NavBar from './components/units/NavBar';
import Home from './components/sections/Home';
import AboutMe from './components/sections/AboutMe';
import Contacts from './components/sections/Contacts';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Flex flexDir="column" alignItems="center" bgColor="black">
      <NavBar />
      <Box maxWidth="1500px">
        <Box id="home">
          <Home />
        </Box>
        <Box id="about" pt="30px">
          <AboutMe />
        </Box>
        <Box id="skills" pt="30px">
          <Skills />
        </Box>
        <Box id="projects" pt="30px">
          <Projects />
        </Box>
        <Box id="contacts" pt="30px">
          <Contacts />
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
