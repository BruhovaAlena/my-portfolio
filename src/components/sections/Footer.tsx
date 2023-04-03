import React from 'react';
import { Text, Box, theme } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <Text fontFamily={theme.fonts.body} color="lila" textAlign="center">
        coded by Alenka © 2023
      </Text>
    </Box>
  );
};

export default Footer;
