import React from 'react';
import {
  Button,
  Flex,
  Text,
  Heading,
  Icon,
  Link,
  theme,
  Box,
} from '@chakra-ui/react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Contacts = () => {
  return (
    <Flex
      flexDir="column"
      mx={{ base: '10px', md: '80px' }}
      mt="40px"
      alignItems={{ base: 'center', lg: 'flex-start' }}
    >
      <Heading
        fontFamily={theme.fonts.heading}
        color="black"
        textAlign={{ sm: 'center', lg: 'left' }}
      >
        Contacts
      </Heading>
      <Box
        mt="5px"
        h="5px"
        w="200px"
        bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
        borderRadius="10px"
      ></Box>
      <Flex marginTop="40px" gap="20px">
        <Link
          href="https://www.linkedin.com/in/alena-br%C5%AFhov%C3%A1-336626193/"
          isExternal
        >
          <Icon as={BsLinkedin} color={'black'} w={10} h={10} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alena-br%C5%AFhov%C3%A1-336626193/"
          isExternal
        >
          <Icon as={BsGithub} color={'black'} w={10} h={10} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contacts;
