import { Box } from '@chakra-ui/react';

const WaveTwo = () => {
  return (
    <Box
      width="100%"
      height="550px"
      overflow="hidden"
      bg='radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,255,1) 100%)'
      zIndex='10'
      position='absolute'
      opacity='0.1'
      marginTop='205px'
      css={{
        '@media screen and (width: 375px)': {
            marginTop: '-235px',
            
          },
          '@media screen and (width: 414px)': {
            marginTop: '-229px',
            
          },
          '@media screen and (width: 390px)': {
            marginTop: '-232px',
            
          },
          '@media screen and (width: 430px)': {
            marginTop: '-229px',
            
          },
          '@media screen and (width: 412px)': {
            marginTop: '-229px',
            
          },
          '@media screen and (width: 360px)': {
            marginTop: '-229px',
            
          },
      }}
    />
  );
};

export default WaveTwo;