import { Heading, Box, Flex } from '@chakra-ui/react';
import Project, { UsedTech } from '../units/Project';
import { IconName } from '../../constants/icon';

export type ProjectType = {
  title: string;
  desc: string[];
  date?: string;
  icons: UsedTech[];
  apple?: string;
  android?: string;
  link?: string
};

const experience: ProjectType[] = [
  {
    title: 'Frontend Developer - Xploro AI app',
    date: 'July 2024 - Present',
    desc: [
      'development of mobile app Xploro AI with React Native', 'learning of using AI platform Claude',
      'collaborating with UX/UI designers and dev team',
      'troubleshooting and fixing front-end issues'

    ],
    apple: 'https://apps.apple.com/sk/app/xploro-ai-travel-audio-guide/id6464040011',
    android: 'https://play.google.com/store/apps/details?id=com.advixory.xploro&hl=sk',
    icons:[   
      //TODO add 
      { icon: IconName.REACT_NATIVE, text: 'React Native' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.NEXT, text: 'Next.js'}

    ]
  },
  { 
    title: 'Frontend Developer at Dactyl Group s.r.o.',
    date: 'Sep 2023 - Apr 2024',
    desc: ['mobile app and web development', 'building responsive web apps', 'assisting in the creation of web pages/mobiles apps and user interfaces', 'collaborating with UX/UI designers and dev teams', 'troubleshooting and fixing front-end issues'],
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.REACT_NATIVE, text: 'React Native' },
      { icon: IconName.EXPO, text: 'Expo' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.NEXT, text: 'Next.js'},
      { icon: IconName.GIT, text: 'Git' },
      { icon: IconName.STYLED, text: 'styled components'},
      { icon: IconName.REST, text: 'Rest API' },
      { icon: IconName.TAILWIND, text: 'Tailwind'},
      { icon: IconName.REACT_QUERY, text: 'React Query'},
      { icon: IconName.FIGMA, text: 'Figma'}
  ]
  },
 
  {
    title: 'Intership - Frontend Developer at Digital League',
    date: 'Feb 2022 - Apr 2023',
    desc: [
      'development of hybrid mobile app in React Native for iOS and Android', 
      'learning and applying front-end development best practices'
    ],
    link:'https://drive.google.com/file/d/1uGMA1wSY6m5E1dKOdGhasXP5p9BN7eiq/view?usp=sharing',
    apple:
    'https://apps.apple.com/gb/app/sanity-app/id1669729843?platform=iphone',
    android:
    'https://play.google.com/store/apps/details?id=sk.bluelemons.sanity&hl=sk&gl=US',
    icons: [
      { icon: IconName.REACT_NATIVE, text: 'React Native' },
      { icon: IconName.EXPO, text: 'Expo' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.GIT, text: 'Git' },
      { icon: IconName.STYLED, text: 'styled components' },
      { icon: IconName.REST, text: 'Rest API' },
      { icon: IconName.AXIOS, text: 'Axios' },
      { icon: IconName.FIGMA, text: 'Figma' },
    ]
  }

]


const Projects = () => {
  return (
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
        Experience
      </Heading>
      <Box
        mt="5px"
        h="5px"
        w="200px"
        bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
        borderRadius="10px"
        mb="10px"
      ></Box>

      <Flex flexDirection='column' gap='20px'>
        {experience.map((exp) => (
          <Project
            description={exp.desc}
            title={exp.title}
            tools={exp.icons}
            apple={exp.apple}
            android={exp.android}
            demoLink={exp.link}
            date={exp.date}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
