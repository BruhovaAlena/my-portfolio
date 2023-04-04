import React from 'react';
import { Flex, Text, Link, theme, Box } from '@chakra-ui/react';
import ItemSkill from './ItemSkill';
import UsedTechIcon from './UsedTechIcon';
import { IconName } from '../../constants/icon';

type ProjectProps = {
  title: string;
  desc: string;
  githubLink?: string;
  demoLink: string;
  tools: IconName[];
};

const Project = ({
  desc,
  title,
  tools,
  githubLink,
  demoLink,
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
    >
      <Text fontSize="3xl" fontFamily={theme.fonts.heading} color="black">
        {title}
      </Text>
      <Flex flexDir={{ base: 'column', lg: 'row' }}>
        <Flex flexDir="column" w="100%">
          <Text color="black" fontFamily={theme.fonts.body}>
            {desc}
          </Text>
          {githubLink && (
            <Link
              fontFamily={theme.fonts.body}
              href={githubLink}
              isExternal
              color="lila"
              fontWeight="semibold"
            >
              Github code
            </Link>
          )}

          <Link
            fontFamily={theme.fonts.body}
            href={demoLink}
            isExternal
            color="darkBlue"
            fontWeight="semibold"
          >
            Demo
          </Link>
        </Flex>

        <Box w="100%">
          <Text color="black" fontFamily={theme.fonts.heading} fontSize="lg">
            Tech used
          </Text>
          <Box
            mt="5px"
            h="3px"
            w="100px"
            bgGradient="linear(to-r, #AD7BE9,#3E54AC)"
            borderRadius="10px"
            mb="10px"
          ></Box>
          <Flex flexWrap="wrap">
            {tools.map((tool) => (
              <UsedTechIcon iconName={tool} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
