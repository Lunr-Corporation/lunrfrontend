import { Box } from '@chakra-ui/react';

const Wave = () => {
  return (
    <Box
      width="100%"
      height="550px"
      overflow="hidden"
      bg="transparent"
      zIndex='10'
      position='absolute'
      opacity='0.1'
      marginTop='-85px'
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
            marginTop: '-236px',
            
          },
          '@media screen and (width: 768px)': {
            marginTop: '-190px',
            
          },
          '@media screen and (width: 820px)': {
            marginTop: '-190px',
            
          },
          '@media screen and (width: 1024px)': {
            marginTop: '-164px',
            
          },
          '@media screen and (width: 912px)': {
            marginTop: '-174px',
            
          },
          '@media screen and (width: 540px)': {
            marginTop: '-216px',
            
          },
          '@media screen and (width: 280px)': {
            marginTop: '-246px',
            
          },
          '@media screen and (width: 853px)': {
            marginTop: '-182px',
            
          }


      }}
      
    >
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          rotate:'180deg'
        }}
   
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00aeff" />
            <stop offset="100%" stopColor="#f6bbfc" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,224L80,218.7C160,213,320,203,480,176C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Wave;
