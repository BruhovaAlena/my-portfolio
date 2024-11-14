import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconName, IconMapper } from '../../constants/icon';

type UsedTechIconProps = {
  iconName: IconName;
  title: string;
};

const UsedTechIcon = ({ iconName, title }: UsedTechIconProps) => {
  return (
    <Flex
      borderRadius="6px"
      borderWidth="1px"
      borderColor="lila"
      bgColor='white'
      height="68px"
      width="68px"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      pt="10px"
    >
      <Icon as={IconMapper[iconName]} w="20px" h="20px" />
      <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
        <Text textAlign="center" fontSize='2xs' fontWeight='semibold'  >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default UsedTechIcon;
