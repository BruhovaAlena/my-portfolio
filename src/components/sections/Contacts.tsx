import React from 'react';
import { Flex, Text, Heading, Icon, Link, theme, Box } from '@chakra-ui/react';
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
        color="white"
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
      <Text
        color="white"
        fontFamily={theme.fonts.body}
        textAlign={{ base: 'justify', lg: 'left' }}
        mt="10px"
      >
        If you have any questions about me or my projects, you can find me on
        social media
      </Text>
      <Flex mt="20px" gap="20px">
        <Link
          href="https://www.linkedin.com/in/alena-br%C5%AFhov%C3%A1-336626193/"
          isExternal
        >
          <Icon as={BsLinkedin} color={'lila'} w={10} h={10} />
        </Link>
        <Link href="https://github.com/BruhovaAlena" isExternal>
          <Icon as={BsGithub} color={'lila'} w={10} h={10} />
        </Link>
      </Flex>
      <Text
        color="white"
        fontFamily={theme.fonts.body}
        textAlign={{ base: 'justify', lg: 'left' }}
        mt="10px"
      >
        or you can send me an email:{' '}
        <Text
          as="mark"
          bgColor="lila"
          fontWeight="semibold"
          borderRadius="2px"
          px="2px"
        >
          bruhovaalena@gmail.com
        </Text>
      </Text>
    </Flex>
  );
};

export default Contacts;
