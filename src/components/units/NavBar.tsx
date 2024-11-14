import { Flex, Stack, useDisclosure, Icon } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NAV_LINKS } from '../../constants/navLinks';
import { NavBarItem } from './NavBarItem';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      py={2}
      px={4}
      direction={['column', 'column', 'row']}
      justifyContent="space-between"
      position="sticky"
      top="0"
      width="100%"
      overflow={'hidden'}
      zIndex={1}
      bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
      borderBottomRightRadius='xl'
      borderBottomLeftRadius='xl'
      boxShadow='xl'
    >
      <Flex alignItems="center" wrap="wrap">
        <Icon
          as={GiHamburgerMenu}
          onClick={isOpen ? onClose : onOpen}
          display={['inline', 'inline', 'none']}
          w="40px"
          h="40px"
          color="white"
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
          {NAV_LINKS.map(({ href, text }) => (
            <NavBarItem href={href} text={text} key={text} />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
