import React from 'react';
import { Flex, Box, theme, Heading } from '@chakra-ui/react';
import ItemSkill from '../units/ItemSkill';
import { IconName } from '../../constants/icon';

const Skills = () => {
  return (
    <Box>
      <Flex
        flexDir="column"
        mx={{ base: '10px', md: '80px' }}
        mt="40px"
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <Heading
          color="black"
          fontFamily={theme.fonts.heading}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          My skills
        </Heading>
        <Box
          mt="5px"
          h="5px"
          w="200px"
          bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
          borderRadius="10px"
        ></Box>

        <Flex
          mt="10px"
          gap="10px"
          flexWrap="wrap"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <ItemSkill text="JavaScript" iconName={IconName.JAVASCRIPT} />
          <ItemSkill text="TypeScript" iconName={IconName.TYPESCRIPT} />
          <ItemSkill text="React" iconName={IconName.REACT} />
          <ItemSkill text="React Native" iconName={IconName.REACT_NATIVE} />
          <ItemSkill text="HTML5" iconName={IconName.HTML} />
          <ItemSkill text="CSS 3" iconName={IconName.CSS} />
          <ItemSkill text="styled components" iconName={IconName.STYLED} />
          <ItemSkill text="Chakra UI" iconName={IconName.CHAKRA} />
          <ItemSkill text="Git" iconName={IconName.GIT} />
          <ItemSkill text="Express" iconName={IconName.EXPRESS} />
          <ItemSkill text="Firebase" iconName={IconName.FIREBASE} />
          <ItemSkill text="Node.js" iconName={IconName.NODEJS} />
          <ItemSkill text="Prisma" iconName={IconName.PRISMA} />
          <ItemSkill text="PostgreSQL" iconName={IconName.POSTGRES} />
          <ItemSkill text="Rest API" iconName={IconName.REST} />
        </Flex>
      </Flex>
      <Flex flexDir="column" mt="40px" mx={{ base: '10px', md: '80px' }}>
        <Heading
          size="md"
          color="black"
          fontFamily={theme.fonts.heading}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          I am learning
        </Heading>

        <Flex
          mt="10px"
          gap="10px"
          flexWrap="wrap"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <ItemSkill text="Express" iconName={IconName.EXPRESS} />
          <ItemSkill text="Firebase " iconName={IconName.FIREBASE} />
          <ItemSkill text="React Query" iconName={IconName.REACT_QUERY} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Skills;
