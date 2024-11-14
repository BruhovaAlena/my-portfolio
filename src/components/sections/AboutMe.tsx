import { Flex, Text, Heading, Box } from '@chakra-ui/react';

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
          color="white"
          textAlign={{ sm: 'center', lg: 'left' }}
        >
          About me
        </Heading>
        <Box
          mt="5px"
          h="5px"
          w="200px"
          bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
          borderRadius="10px"
        ></Box>
        <Text
          color="white"
          textAlign={{ base: 'justify', lg: 'left' }}
          mt="10px"
        >
          I'm a junior frontend developer with a foundation in modern web development and basic testing skills. I actively educate myself through online courses and various educational platforms, staying up-to-date with the latest technologies and best practices. With experience in frontend libraries like React, React Native, Next.js and a passion for creating responsive, user-centered designs, I am currently looking for a job where I can continue to grow and contribute to a dynamic team on meaningful projects.
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutMe;
