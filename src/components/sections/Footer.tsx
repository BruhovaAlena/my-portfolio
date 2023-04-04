import React from 'react';
import { Text, Box, theme } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box mt="30px">
      <Text fontFamily={theme.fonts.body} color="black" textAlign="center">
        coded by Alena © 2023
      </Text>
    </Box>
  );
};

export default Footer;
