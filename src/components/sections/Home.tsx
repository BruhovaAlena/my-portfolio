import { Button, Flex, theme, Image, Show, Text } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import myPhoto from '../../images/myPhoto.jpg';

const Home = () => {
  return (
    <Flex
      alignItems="center"
      flexDir={{ base: 'column', lg: 'row' }}
      mx={{ base: '10px', md: '80px' }}
      mt={10}
    >
      <Image
        src={myPhoto}
        w={{ base: '200px', md: '250px', lg: '290px' }}
        h={{ base: '250px', md: '320px', lg: '370px' }}
        borderRadius="20px"
        mb={{ base: '20px', lg: '0px' }}
      />
      <Flex
        flexDir="column"
        ml={{ md: '80px' }}
        w="100%"
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <Show below="md">
          <TypeAnimation
            sequence={[
              ' Frontend Developer',
              500,
              ' Books Addict',
              500,
              ' Plants Lover',
              500,
              ' #1 Harry Styles fan',
              500,
            ]}
            style={{ fontSize: '16px', fontFamily: theme.fonts.heading }}
            repeat={Infinity}
          />
        </Show>
        <Show above="md">
          <Flex>
            <Text
              fontSize="32px"
              fontFamily={theme.fonts.heading}
              fontWeight="bold"
              mr="5px"
              color="white"
            >
              Hi, I am Alena,
            </Text>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                500,
                'Books Addict',
                500,
                'Plants Lover',
                500,
                '#1 Harry Styles fan',
                500,
              ]}
              style={{
                fontSize: '32px',
                fontFamily: theme.fonts.heading,
                fontWeight: 'bold',
                color: '#AD7BE9',
              }}
              repeat={Infinity}
            />
          </Flex>
        </Show>

        <Button
          marginTop="10px"
          size="lg"
          bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
          variant="solid"
          color="white"
          w="200px"
          fontFamily={theme.fonts.body}
          _hover={{
            bgGradient: 'linear(to-l, #AD7BE9,#3E54AC)',
          }}
        >
          <a href="#projects">Projects</a>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
