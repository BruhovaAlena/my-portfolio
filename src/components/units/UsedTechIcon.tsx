import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { IconName, IconMapper } from '../../constants/icon';

type UsedTechIconProps = {
  iconName: IconName;
};

const UsedTechIcon = ({ iconName }: UsedTechIconProps) => {
  return (
    <Flex
      borderRadius="6px"
      borderWidth="1px"
      borderColor="lila"
      height="55px"
      width="55px"
      justifyContent="center"
      alignItems="center"
      mr="5px"
    >
      <Icon as={IconMapper[iconName]} w="35px" h="35px" />
    </Flex>
  );
};

export default UsedTechIcon;
