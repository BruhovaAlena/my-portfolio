import { Button, Flex, theme, Image, Show } from '@chakra-ui/react';
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
              'Hi, I am Alena,',
              500,
              'Hi, I am Alena, Frontend Developer',
              500,
              'Hi, I am Alena, Books Addict',
              500,
              'Hi, I am Alena, Plants Lover',
              500,
              'Hi, I am Alena, #1 Harry Styles fan',
              500,
              'Hi, I am Alena,',
              500,
            ]}
            style={{ fontSize: '16px', fontFamily: theme.fonts.heading }}
            repeat={Infinity}
          />
        </Show>
        <Show above="md">
          <TypeAnimation
            sequence={[
              'Hi, I am Alena,',
              500,
              'Hi, I am Alena, Frontend Developer',
              500,
              'Hi, I am Alena, Books Addict',
              500,
              'Hi, I am Alena, Plants Lover',
              500,
              'Hi, I am Alena, #1 Harry Styles fan',
              500,
              'Hi, I am Alena,',
              500,
            ]}
            style={{ fontSize: '32px', fontFamily: theme.fonts.heading }}
            repeat={Infinity}
          />
        </Show>

        <Button
          marginTop="10px"
          size="lg"
          bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
          variant="solid"
          color="white"
          w="200px"
          fontFamily={theme.fonts.body}
        >
          <a href="#projects">Projects</a>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
