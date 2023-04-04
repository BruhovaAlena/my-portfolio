import React from 'react';
import {
  Flex,
  Stack,
  useDisclosure,
  Icon,
  Text,
  theme,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      py={2}
      px={4}
      direction={['column', 'column', 'row']}
      justifyContent="space-between"
      bgColor="white"
      position="sticky"
      top="0"
      width="100%"
      overflow={'hidden'}
      zIndex={1}
    >
      <Flex alignItems="center" wrap="wrap">
        {/* <Flex flexGrow={1} justify="center">
          <Text
            ml={[4, 0]}
            fontSize="3xl"
            color="black"
            fontFamily={theme.fonts.body}
          >
            Alena
          </Text>
        </Flex> */}
        <Icon
          as={GiHamburgerMenu}
          onClick={isOpen ? onClose : onOpen}
          display={['inline', 'inline', 'none']}
          w="40px"
          h="40px"
          color="black"
        />
      </Flex>
      <Flex
        display={[isOpen ? 'flex' : 'none', isOpen ? 'flex' : 'none', 'flex']}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={{ sm: 'left', md: 'center' }}
          spacing="30px"
        >
          <a
            href="#home"
            style={{
              color: '#000000',
              fontSize: '20px',
              fontFamily: theme.fonts.body,
            }}
          >
            Home
          </a>
          <a
            href="#skills"
            style={{
              color: '#000000',
              fontSize: '20px',
              fontFamily: theme.fonts.body,
            }}
          >
            Skills
          </a>
          <a
            href="#about"
            style={{
              color: '#000000',
              fontSize: '20px',
              fontFamily: theme.fonts.body,
            }}
          >
            About me
          </a>
          <a
            href="#projects"
            style={{
              color: '#000000',
              fontSize: '20px',
              fontFamily: theme.fonts.body,
            }}
          >
            Projects
          </a>
          <a
            href="#contacts"
            style={{
              color: '#000000',
              fontSize: '20px',
              fontFamily: theme.fonts.body,
            }}
          >
            Contacts
          </a>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
