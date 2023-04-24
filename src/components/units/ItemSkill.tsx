import React from 'react';
import { Flex, Text, theme, Icon, Link } from '@chakra-ui/react';
import { IconName, IconMapper } from '../../constants/icon';

type ItemSkillProps = {
  text: string;
  iconName: IconName;
  urlAddress?: string;
};

const ItemSkill = ({ text, iconName, urlAddress }: ItemSkillProps) => {
  return (
    <Link href={urlAddress} isExternal>
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
        _hover={{ backgroundColor: 'lila', borderRadius: '6px' }}
      >
        <Icon as={IconMapper[iconName]} w="40px" h="40px" />
        <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
          <Text textAlign="center" fontWeight="semibold" lineHeight="18px">
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ItemSkill;
