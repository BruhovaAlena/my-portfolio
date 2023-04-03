import React from 'react';
import { Flex, Stack, useDisclosure, Icon, Text } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      py={2}
      px={4}
      direction={['column', 'column', 'row']}
      justifyContent="space-between"
      bgColor="lightBlue"
      position="fixed"
      top="0"
      width="100%"
      overflow={'hidden'}
    >
      <Flex alignItems="center" wrap="wrap">
        <Flex flexGrow={1} justify="center">
          <Text ml={[4, 0]} fontSize="3xl" color="darkBlue">
            Alenka
          </Text>
        </Flex>
        <Icon
          as={GiHamburgerMenu}
          onClick={isOpen ? onClose : onOpen}
          display={['inline', 'inline', 'none']}
          w="40px"
          h="40px"
          color="darkBlue"
        />
      </Flex>
      <Flex
        display={[isOpen ? 'flex' : 'none', isOpen ? 'flex' : 'none', 'flex']}
      >
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          align={{ sm: 'left', md: 'center' }}
        >
          <a href="" style={{ color: '#3E54AC', fontSize: '20px' }}>
            Home
          </a>
          <a href="" style={{ color: '#3E54AC', fontSize: '20px' }}>
            Skills
          </a>
          <a href="" style={{ color: '#3E54AC', fontSize: '20px' }}>
            About me
          </a>
          <a href="" style={{ color: '#3E54AC', fontSize: '20px' }}>
            Projects
          </a>
          <a href="" style={{ color: '#3E54AC', fontSize: '20px' }}>
            Contacts
          </a>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
