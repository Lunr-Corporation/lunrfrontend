import { Box } from '@chakra-ui/react';

const WaveTwo = () => {
  return (
    <Box
      width="100%"
      height="850px"
      overflow="hidden"
      bg='radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,255,1) 100%)'
      zIndex='10'
      position='absolute'
      opacity='0.1'
      marginTop='75px'
      css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
            marginTop:'-1000px'
            
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
                
            marginTop:'-650px',
            
            
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
                
            marginTop:'-490px'
           
   
         }
      }}
    />
  );
};

export default WaveTwo;