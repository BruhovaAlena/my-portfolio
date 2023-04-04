import React from 'react';
import { Flex, Text, theme, Icon } from '@chakra-ui/react';
import { IconName, IconMapper } from '../../constants/icon';

type ItemSkillProps = {
  text: string;
  iconName: IconName;
};

const ItemSkill = ({ text, iconName }: ItemSkillProps) => {
  return (
    <Flex
      borderRadius="6px"
      bgColor="white"
      borderWidth="1px"
      borderColor="lila"
      height="100px"
      w="100px"
      alignItems="center"
      color="apricote"
      fontFamily={theme.fonts.body}
      flexDir="column"
      pt="10px"
    >
      <Icon as={IconMapper[iconName]} w="40px" h="40px" />
      <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
        <Text textAlign="center" fontWeight="semibold" lineHeight="18px">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ItemSkill;