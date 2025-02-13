import { Button, Flex, Image, Show, Text } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import photo from '../../images/photo.jpg';

const Home = () => {
  return (
    <Flex
      alignItems="center"
      flexDir={{ base: 'column', lg: 'row' }}
      mx={{ base: '10px', md: '80px' }}
      mt={10}
    >
      <Image
        src={photo}
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
          <Flex>
        <Text
              fontSize="16px"
              fontWeight="bold"
              mr="5px"
              color="white"
            >
              Hi, I am Alena,
            </Text>
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
            style={{ fontSize: '16px',   color: '#AD7BE9', fontWeight: 'bold'
            }}
            repeat={Infinity}
          />
          </Flex>
        </Show>
        <Show above="md">
          <Flex>
            <Text
              fontSize="32px"
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
          bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
          variant="solid"
          color="white"
          w="200px"
          _hover={{
            bgGradient: 'linear(to-l, #AD7BE9,#14b8a6)',
          }}
        >
          <a href="#projects">Experience</a>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
