import React from 'react';
import { Flex, Text, Heading, Box, theme } from '@chakra-ui/react';
const AboutMe = () => {
  return (
    <Box>
      <Flex
        flexDir="column"
        mx={{ base: '10px', md: '80px' }}
        mt="40px"
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <Heading
          color="black"
          fontFamily={theme.fonts.heading}
          textAlign={{ sm: 'center', lg: 'left' }}
        >
          About me
        </Heading>
        <Box
          mt="5px"
          h="5px"
          w="200px"
          bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
          borderRadius="10px"
        ></Box>
        <Text
          color="black"
          fontFamily={theme.fonts.body}
          textAlign={{ base: 'justify', lg: 'left' }}
          mt="10px"
        >
          Young, driven and motivated self-taught developer with interest in
          building digital products using modern web technologies. Web
          technologies and programming have been my hobby, which has become a
          passion.Maybe I am not the best one, but I have desire and mindset to
          always improve, learn fast and become as good as possible. I'm now
          seeking a full-time role where I can contribute my skills in coding.
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutMe;
