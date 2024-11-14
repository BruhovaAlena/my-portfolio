import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import { IconName, IconMapper } from '../../constants/icon';

type ItemSkillProps = {
  text: string;
  iconName: IconName;
  urlAddress?: string;
};

const ItemSkill = ({ text, iconName, urlAddress }: ItemSkillProps) => {
  return (
    <Link href={urlAddress} isExternal _hover={{ color: 'white' }}>
      <Flex
        borderRadius="6px"
        bgColor="white"
        borderWidth="2px"
        borderColor="lila"
        height="100px"
        w="100px"
        alignItems="center"
        flexDir="column"
        pt="10px"
        _hover={{
          borderRadius: '6px',
          bgGradient: 'linear(to-r, #AD7BE9,#14b8a6)',
          color: 'white',
          border: 'none',
        }}
      >
        <Icon as={IconMapper[iconName]} w="40px" h="40px" />
        <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
          <Text textAlign="center" fontWeight="semibold" lineHeight="18px" fontSize='small'>
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ItemSkill;
