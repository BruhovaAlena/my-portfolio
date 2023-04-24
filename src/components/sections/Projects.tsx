import React from 'react';
import { Heading, Box, theme, Flex, SimpleGrid } from '@chakra-ui/react';
import Project, { UsedTech } from '../units/Project';
import { IconName } from '../../constants/icon';

export type ProjectType = {
  title: string;
  desc: string;
  icons: UsedTech[];
  githubLinkFe?: string;
  githubLinkBe?: string;
  demoLink?: string;
  apple?: string;
  android?: string;
};

const projects: ProjectType[] = [
  {
    title: 'Sanity',
    desc: 'Hybrid mobile app developed in React Native for iOS and Android. This app was created in cooperation with VUDPaP as part of Digital League educational programme. Main goal of this app is to help children suffering from anxiety.',
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.REACT_NATIVE, text: 'React Native' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.GIT, text: 'Git' },
      { icon: IconName.STYLED, text: 'styled components' },
      { icon: IconName.REST, text: 'Rest API' },
    ],
    apple:
      'https://apps.apple.com/gb/app/sanity-app/id1669729843?platform=iphone',
    android:
      'https://play.google.com/store/apps/details?id=sk.bluelemons.sanity&hl=sk&gl=US',
  },
  {
    title: 'Events app',
    desc: 'An event management tool developed as a fullstack web application. This application is intended for two types of users. An organizer user can create and manage events. An ordinary user can sign for an event, sign out of an event and view the details of each event.',
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.TYPESCRIPT, text: 'Typescript' },
      { icon: IconName.CHAKRA, text: 'Chakra UI' },
      { icon: IconName.REACT_QUERY, text: 'React Query' },
      { icon: IconName.NODEJS, text: 'Node.js' },
      { icon: IconName.PRISMA, text: 'Prisma' },
      { icon: IconName.EXPRESS, text: 'Express' },
      { icon: IconName.REST, text: 'Rest API' },
      { icon: IconName.FIREBASE, text: 'Firebase' },
    ],
    githubLinkFe: 'https://github.com/BruhovaAlena/event-app-fe',
    githubLinkBe: 'https://github.com/BruhovaAlena/event-app-be',
    demoLink: 'https://events-app-fe.onrender.com',
  },
  {
    title: 'QR Code Generator',
    desc: 'Generator for generating and downloading QR codes.',
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.CHAKRA, text: 'Chakra UI' },
    ],
    githubLinkFe: 'https://github.com/BruhovaAlena/QRCodeGenerator',
    demoLink: 'https://qr-code-generator-cn1o.onrender.com/',
  },
  {
    title: 'Plant Shop Landing Page ',
    desc: 'A fully responsive site built as landing page for Plant Shop developed using HTML5 and CSS3.',
    icons: [
      { icon: IconName.HTML, text: 'HTML5' },
      { icon: IconName.CSS, text: 'CSS3' },
    ],
    githubLinkFe: 'https://github.com/BruhovaAlena/responsive-website',
    demoLink: 'https://bruhovaalena.github.io/responsive-website/',
  },
  {
    title: 'Crypto Currency Converter',
    desc: 'A full stack web app for converting crypto currencies to usd with tracking of latest conversions and overall statistics of conversions for each crypto currency. The CoinMarketCap API is used to obtain data about conversion rates.',
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.TYPESCRIPT, text: 'TypeScript' },
      { icon: IconName.CHAKRA, text: 'Chakra UI' },
      { icon: IconName.NODEJS, text: 'Node.js' },
      { icon: IconName.PRISMA, text: 'Prisma' },
      { icon: IconName.EXPRESS, text: 'Express' },
    ],
    githubLinkFe:
      'https://github.com/BruhovaAlena/crypto-currency-converter-fe',
    githubLinkBe:
      'https://github.com/BruhovaAlena/crypto-currency-converter-be',
    demoLink: 'https://crypto-currency-converter-fe.onrender.com',
  },
  {
    title: 'Weather app',
    desc: 'A simple web app to get weather data based on search using OpenWeather API.',
    icons: [
      { icon: IconName.REACT, text: 'React' },
      { icon: IconName.JAVASCRIPT, text: 'JavaScript' },
      { icon: IconName.STYLED, text: 'styled components' },
      { icon: IconName.REST, text: 'Rest API' },
    ],
    githubLinkFe: 'https://github.com/BruhovaAlena/weather-app',
    demoLink: 'https://github.com/BruhovaAlena/event-app-fe',
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

      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="10px">
        {projects.map((project) => (
          <Project
            desc={project.desc}
            title={project.title}
            githubLinkFe={project.githubLinkFe ? project.githubLinkFe : ''}
            githubLinkBe={project.githubLinkBe ? project.githubLinkBe : ''}
            demoLink={project.demoLink}
            tools={project.icons}
            apple={project.apple}
            android={project.android}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
