import React from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const move = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const DashedLine = () => {
  return (
    <Box 
      position="relative"
      height="1px"
      overflow="hidden"
      width="50px"
      alignSelf="center"
      transform='rotate(90deg)'
    >
      <Box 
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="#ffffff3b"
        content='""'
        as="span"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="blue"
        content='""'
        as="span"
        animation={`${move} 3s infinite`}
      />
    </Box>
  );
};

export default DashedLine;