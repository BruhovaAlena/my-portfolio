import { Flex, Text, Link, theme, Box, Icon } from '@chakra-ui/react';
import UsedTechIcon from './UsedTechIcon';
import { IconName } from '../../constants/icon';

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
      borderWidth="3px"
      borderColor="lila"
      px="20px"
      pb="20px"
      pt="10px"
      gap="10px"
      mb="20px"
      width="full"
      bgColor="white"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Text
          fontSize="3xl"
          fontFamily={theme.fonts.heading}
          color="black"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text color="black" fontFamily={theme.fonts.body}>
          {desc}
        </Text>
      </Flex>
      <Flex flexDir="column">
        <Flex flexDir="column">
          {githubLinkFe && (
            <Link
              fontFamily={theme.fonts.body}
              href={githubLinkFe}
              isExternal
              color="darkBlue"
              fontWeight="semibold"
            >
              Github FE repository
            </Link>
          )}
          {githubLinkBe && (
            <Link
              fontFamily={theme.fonts.body}
              href={githubLinkBe}
              isExternal
              color="darkBlue"
              fontWeight="semibold"
            >
              Github BE repository
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
            <Flex flexDir="column">
              <Link
                href={apple}
                isExternal
                color="darkBlue"
                fontWeight="semibold"
                fontFamily={theme.fonts.body}
              >
                App Store
              </Link>
              <Link
                href={android}
                isExternal
                color="darkBlue"
                fontWeight="semibold"
                fontFamily={theme.fonts.body}
              >
                Google Play
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
