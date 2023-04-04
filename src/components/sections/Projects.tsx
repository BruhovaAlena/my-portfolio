import React from 'react';
import { Heading, Box, theme, Flex } from '@chakra-ui/react';
import Project from '../units/Project';
import { IconName } from '../../constants/icon';

export type ProjectType = {
  title: string;
  desc: string;
  icons: IconName[];
  githubLink?: string;
  demoLink: string;
};

const projects: ProjectType[] = [
  {
    title: 'Sanity app',
    desc: 'Mobile app to help children suffering from anxiety developed during educational program Digital League.',
    icons: [
      IconName.REACT_NATIVE,
      IconName.TYPESCRIPT,
      IconName.GIT,
      IconName.STYLED,
      IconName.REST,
    ],
    demoLink: '',
  },
  {
    title: 'Weather app',
    desc: '',
    icons: [
      IconName.REACT,
      IconName.JAVASCRIPT,
      IconName.STYLED,
      IconName.REST,
    ],
    demoLink: '',
  },
  {
    title: 'Crypto currency converter',
    desc: 'Crypto currency converter app, latest convesions.',
    icons: [
      IconName.REACT,
      IconName.TYPESCRIPT,
      IconName.CHAKRA,
      IconName.PRISMA,
      IconName.EXPRESS,
    ],
    githubLink: 'https://github.com/BruhovaAlena/event-app-fe',
    demoLink: '',
  },
  {
    title: 'Responsive web - plant shop',
    desc: 'Simple responsive website.',
    icons: [IconName.HTML, IconName.CSS],
    githubLink: 'https://github.com/BruhovaAlena/event-app-fe',
    demoLink: '',
  },
  {
    title: 'QR Code Generator app',
    desc: 'Simple QR Code Generator App.',
    icons: [IconName.REACT, IconName.TYPESCRIPT, IconName.CHAKRA],
    githubLink: 'https://github.com/BruhovaAlena/event-app-fe',
    demoLink: '',
  },
  {
    title: 'Event  app',
    desc: 'adfudf sdu asuhd fihsd fhusdiu fdfs djf.a sdjf aisdjf asdo faosdjf sdjf s',
    icons: [
      IconName.REACT,
      IconName.TYPESCRIPT,
      IconName.REACT_QUERY,
      IconName.CHAKRA,
      IconName.GIT,
      IconName.PRISMA,
      IconName.EXPRESS,
      IconName.REST,
    ],
    githubLink: 'https://github.com/BruhovaAlena/event-app-fe',
    demoLink: '',
  },
];

const Projects = () => {
  return (
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
        Projects
      </Heading>
      <Box
        mt="5px"
        h="5px"
        w="200px"
        bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
        borderRadius="10px"
        mb="10px"
      ></Box>
      <Box>
        {projects.map((project) => (
          <Project
            desc={project.desc}
            title={project.title}
            githubLink={project.githubLink ? project.githubLink : ''}
            demoLink={project.demoLink}
            tools={project.icons}
          />
        ))}
      </Box>
    </Flex>
  );
};

export default Projects;
