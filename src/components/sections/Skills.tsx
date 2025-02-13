import { Flex, Box, Heading } from '@chakra-ui/react';
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
          color="white"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          My skills
        </Heading>
        <Box
          mt="5px"
          h="5px"
          w="200px"
          bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
          borderRadius="10px"
        ></Box>

        <Flex
          mt="10px"
          gap="10px"
          flexWrap="wrap"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <ItemSkill text="HTML5" iconName={IconName.HTML} />
          <ItemSkill text="CSS3" iconName={IconName.CSS} />
          <ItemSkill
            text="JavaScript"
            iconName={IconName.JAVASCRIPT}
            urlAddress="https://javascript.info/"
          />
          <ItemSkill
            text="TypeScript"
            iconName={IconName.TYPESCRIPT}
            urlAddress="https://www.typescriptlang.org/"
          />
          <ItemSkill
            text="React"
            iconName={IconName.REACT}
            urlAddress="https://react.dev/"
          />
          <ItemSkill
            text="React Native"
            iconName={IconName.REACT_NATIVE}
            urlAddress="https://reactnative.dev/"
          />
          <ItemSkill
            text="Expo"
            iconName={IconName.EXPO}
            urlAddress="https://expo.dev/"
          />
          <ItemSkill
            text="React Query"
            iconName={IconName.REACT_HOOK_FORM}
            urlAddress="https://www.react-hook-form.com/"
          />
          <ItemSkill
            text="React Hook Form"
            iconName={IconName.REACT_QUERY}
            urlAddress="https://tanstack.com/query/latest"
          />
           <ItemSkill
            text="Tailwind"
            iconName={IconName.TAILWIND}
            urlAddress="https://tailwindcss.com/"
          />
          <ItemSkill
            text="styled components"
            iconName={IconName.STYLED}
            urlAddress="https://styled-components.com/"
          />
          <ItemSkill
            text="Chakra UI"
            iconName={IconName.CHAKRA}
            urlAddress="https://chakra-ui.com/"
          />
          <ItemSkill
            text="Git"
            iconName={IconName.GIT}
            urlAddress="https://git-scm.com/"
          />
          <ItemSkill
            text="Express"
            iconName={IconName.EXPRESS}
            urlAddress="https://expressjs.com/"
          />
          <ItemSkill
            text="Firebase"
            iconName={IconName.FIREBASE}
            urlAddress="https://firebase.google.com/"
          />
          <ItemSkill
            text="Node.js"
            iconName={IconName.NODEJS}
            urlAddress="https://nodejs.org/en"
          />
          <ItemSkill
            text="Prisma"
            iconName={IconName.PRISMA}
            urlAddress="https://www.prisma.io/"
          />
          <ItemSkill
            text="PostgreSQL"
            iconName={IconName.POSTGRES}
            urlAddress="https://www.postgresql.org/"
          />
          <ItemSkill text="Rest API" iconName={IconName.REST} />
          <ItemSkill text="Axios" iconName={IconName.AXIOS} urlAddress='https://axios-http.com/docs/intro'/>
          <ItemSkill text="Figma" iconName={IconName.FIGMA} urlAddress='https://www.figma.com/' />
        </Flex>
      </Flex>
      <Flex flexDir="column" mt="40px" mx={{ base: '10px', md: '80px' }}>
        <Heading
          size="md"
          color="white"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          I am currently learning
        </Heading>

        <Flex
          mt="10px"
          gap="10px"
          flexWrap="wrap"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <ItemSkill
            text="Next.js"
            iconName={IconName.NEXT}
            urlAddress="https://nextjs.org/"
          />
          <ItemSkill
            text="Redux"
            iconName={IconName.REDUX}
            urlAddress="https://react-icons.github.io/react-icons/search?q=redux"
          />
          <ItemSkill
            text="Cypress"
            iconName={IconName.CYPRESS}
            urlAddress="https://www.cypress.io/"
          />
          <ItemSkill
            text="Playwright"
            iconName={IconName.PLAYWRIGHT}
            urlAddress="https://playwright.dev/"
          />
          <ItemSkill
            text="GraphQL"
            iconName={IconName.GRAPHQL}
            urlAddress="https://graphql.org/"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Skills;
