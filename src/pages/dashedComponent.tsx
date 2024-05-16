import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';


const move = keyframes`
  0% {
    transform: translate3d(-200%, 0, 0);
  }
  60% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const DashedLine = () => {
  return (
    <Box
      position="relative"
      bottom="30px"
      right="50%"
      height="1px"
      overflow="hidden"
      width="440px"
      transform="rotate(90deg)"
      marginLeft='-400px'
      
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
