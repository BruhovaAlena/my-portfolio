import React from 'react';
import { Flex, Text, Link, theme, Box, Icon } from '@chakra-ui/react';
import UsedTechIcon from './UsedTechIcon';
import { IconName } from '../../constants/icon';
import { TfiApple } from 'react-icons/tfi';
import { AiFillAndroid } from 'react-icons/ai';

export type UsedTech = {
  text: string;
  icon: IconName;
};

type ProjectProps = {
  title: string;
  desc: string;
  githubLinkFe?: string;
  githubLinkBe?: string;
  demoLink?: string;
  tools: UsedTech[];
  apple?: string;
  android?: string;
};

const Project = ({
  desc,
  title,
  tools,
  githubLinkFe,
  githubLinkBe,
  demoLink,
  apple,
  android,
}: ProjectProps) => {
  return (
    <Flex
      flexDir="column"
      borderRadius="10px"
      borderWidth="1px"
      borderColor="lila"
      px="10px"
      py="10px"
      gap="10px"
      mb="20px"
      width="full"
    >
      <Text fontSize="3xl" fontFamily={theme.fonts.heading} color="black">
        {title}
      </Text>
      <Flex flexDir="column">
        <Flex flexDir="column">
          <Text color="black" fontFamily={theme.fonts.body}>
            {desc}
          </Text>

          {githubLinkFe && (
            <Link
              fontFamily={theme.fonts.body}
              href={githubLinkFe}
              isExternal
              color="lila"
              fontWeight="semibold"
            >
              Github FE code
            </Link>
          )}
          {githubLinkBe && (
            <Link
              fontFamily={theme.fonts.body}
              href={githubLinkBe}
              isExternal
              color="lila"
              fontWeight="semibold"
            >
              Github BE code
            </Link>
          )}
          {demoLink && (
            <Link
              fontFamily={theme.fonts.body}
              href={demoLink}
              isExternal
              color="darkBlue"
              fontWeight="semibold"
            >
              Demo
            </Link>
          )}
          {apple && android && (
            <Flex gap="10px" mt="10px">
              <Link
                href={apple}
                isExternal
                _hover={{ backgroundColor: 'lila', borderRadius: '6px' }}
              >
                <Icon as={TfiApple} w={10} h={10} color="black" />
              </Link>
              <Link
                href={android}
                isExternal
                _hover={{ backgroundColor: 'lila', borderRadius: '6px' }}
              >
                <Icon as={AiFillAndroid} w={10} h={10} color="black" />
              </Link>
            </Flex>
          )}
        </Flex>

        <Box>
          <Text
            color="black"
            fontFamily={theme.fonts.heading}
            fontSize="lg"
            mt="20px"
          >
            Tech Stack
          </Text>
          <Box
            mt="5px"
            h="3px"
            w="100px"
            bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
            borderRadius="10px"
            mb="10px"
          ></Box>
          <Flex flexWrap="wrap" gap="10px">
            {tools.map((tool) => (
              <UsedTechIcon iconName={tool.icon} title={tool.text} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
