import { Flex, Heading, Box, Image } from '@chakra-ui/react';
import cypress from '../../images/skillmea-cypress.png';
import playwrightOne from '../../images/skillmea-playwright-1.png';
import playwrightTwo from '../../images/skillmea-playwright-2.png';
import manual from '../../images/skillmea-testovanie.png';



const Certificates = () => {
  return (
    <Flex
      flexDir='column'
      mx={{ base: '10px', md: '80px' }}
      mt={10}
      alignItems={{ base: 'center', lg: 'flex-start' }}

    >
      <Heading
        color="white"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        Certificates
      </Heading>
      <Box
        mt="5px"
        h="5px"
        w="200px"
        bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
        borderRadius="10px"
        mb="10px"
      ></Box>
      <Flex wrap='wrap'  gap='6' justifyContent={{base:"center", lg:'space-between'}} w='full'>
      <Image
        src={manual}
        w={{ base: '200px', md: '250px', lg: '290px' }}
        h={{ base: '250px', md: '320px', lg: '370px' }}
        borderRadius="20px"
        mb={{ base: '20px', lg: '0px' }}
      />
      <Image
        src={playwrightOne}
        w={{ base: '200px', md: '250px', lg: '290px' }}
        h={{ base: '250px', md: '320px', lg: '370px' }}
        borderRadius="20px"
        mb={{ base: '20px', lg: '0px' }}
      />
      <Image
        src={playwrightTwo}
        w={{ base: '200px', md: '250px', lg: '290px' }}
        h={{ base: '250px', md: '320px', lg: '370px' }}
        borderRadius="20px"
        mb={{ base: '20px', lg: '0px' }}
      />
      <Image
        src={cypress}
        w={{ base: '200px', md: '250px', lg: '290px' }}
        h={{ base: '250px', md: '320px', lg: '370px' }}
        borderRadius="20px"
        mb={{ base: '20px', lg: '0px' }}
      />
        

      </Flex>
       
        
    </Flex>
  );
};

export default Certificates;