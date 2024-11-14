import { Flex, Text, Box } from '@chakra-ui/react';
import UsedTechIcon from './UsedTechIcon';
import { IconName } from '../../constants/icon';
import CustomButton from './CustomButton';

export type UsedTech = {
  text: string;
  icon: IconName;
};

type ProjectProps = {
  title: string;
  description: string[];
  githubLinkFe?: string;
  githubLinkBe?: string;
  demoLink?: string;
  tools: UsedTech[];
  apple?: string;
  android?: string;
  date?: string
};

const Project = ({
  description,
  title,
  tools,
  demoLink,
  apple,
  android,
  date
}: ProjectProps) => {
  return (
    <Flex
      flexDir="column"
      borderRadius="10px"
      borderWidth="1px"
      borderColor="lila"
      px="20px"
      pb="20px"
      pt="10px"
      gap="10px"
      mb="20px"
      width="full"
      bgColor="black"
      justifyContent="space-between"
    >
       <Text
          fontSize="3xl"
          color="white"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Flex gap='20px' >

      <Flex flexDir="column" w='50%'>
       
        <Text color="white"  fontWeight={'semibold'} mb='3'>
          {date}
        </Text>
        <Text color="white" >
          {description.map((desc) => (
            <Text>• {desc}</Text>
          ))}
        </Text>
        
    
      <Flex flexDir="column" mt='10px' >
        <Flex flexWrap="wrap" gap={2}>
          {demoLink && (
           <CustomButton href={demoLink} title='Certificate' />
          )}
          {apple && android && (
            <Flex flexWrap="wrap" gap={2} >
        <CustomButton href={apple} title='App Store' />
        <CustomButton href={android} title='Google Play' />
            </Flex>
          )}
        </Flex>

        
      </Flex>
      </Flex>

      <Flex flexDir='column' w='50%'>
          <Text
            color="white"
            fontSize="lg"
          >
            Tech Stack
          </Text>
          <Box
            mt="5px"
            h="3px"
            w="100px"
            bgGradient="linear(to-r, #AD7BE9,#14b8a6)"
            borderRadius="10px"
            mb="10px"
          ></Box>
          <Flex flexWrap="wrap" gap="10px">
            {tools.map((tool) => (
              <UsedTechIcon iconName={tool.icon} title={tool.text} />
            ))}
          </Flex>
        </Flex>
        </Flex>
    </Flex>
  );
};

export default Project;
