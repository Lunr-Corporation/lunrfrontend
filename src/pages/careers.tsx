import { Box, Button, Text, Flex, Spacer, Center } from '@chakra-ui/react';
import Image from 'next/image';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from 'react';
import DashedLine from './dashedComponent';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import ProgressBar from './progressBar';
import Wave from './wave';
import WaveTwo from './wave2';

import Link from 'next/link'

import { Fade, Slide } from "react-awesome-reveal";


export default function LearnMore() {

   const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    
      return (
        <div style={{ backgroundColor: 'black' }}> 
          
          <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap' zIndex='2'>
            <Image src='/images/logo.png' width={200} height={400} alt='logo' />
            <Text as='b' fontFamily='Poppins' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>About Lunr</Text>
            <Text as='b' fontFamily='Poppins' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Mission</Text>
            <Text as='b' fontFamily='Poppins' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Sirius</Text>
            <Text as='b' fontFamily='Poppins' fontSize={{ base: 'xl', md: '2xl' }} color='#084c80' my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Contact</Text>
          </Flex>
          
          <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
      style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100vh' }}
    />    
          
          <Box bg='#084c80' w='100vw' h='800px' position='relative'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image src='/images/career.jpeg' layout='fill' objectFit='cover' alt='rocket' />
            </div>
            <Box position='absolute' bottom='0' width='100%' mb='400px' display='flex' justifyContent='center' >
                <Fade>
                    <Center>
                    <Text fontFamily='Poppins' color='white' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'30px',
            marginLeft:'30px'
            
          },'@media screen and (min-width: 700px) ': {
          fontSize:'50px',
            
           
   
         }}}> Careers </Text>
         </Center>
                </Fade>
            </Box>

          </Box>
        
         <Center>
          <Box>
            <Center>
            <Text fontFamily='Poppins' fontSize='2xl' marginTop='100px'>Coming Soon!</Text>
            </Center>
          </Box>
          </Center>

        

      <div style={{marginTop:'420px'}}>
        <hr />
          
          <Center>
          <Box padding='5px'>
            <Center>
            <Image src='/images/logo.png' width={200} height={400} alt='logo' />
            </Center>
            <Center>
            <Text marginTop='-10px' fontSize='xl' fontFamily='Poppins' color='#084c80' marginBottom='10px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            
          }}}>© 2023 Lunr Corporation. All Rights Reserved.</Text>
            </Center>
            <Center>
            <div style={{textAlign: 'center'}}>
            <Text fontSize='xl' color='#084c80' fontFamily='Poppins' marginBottom='10px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            marginLeft:'14px'
            
          }}}>Visit <Link href='www.OnGuardOnline.gov'><Text as='u' css={{
          
            '@media screen and (min-width: 300px) and (max-width: 500px)': 
            
            {
              
              fontSize:'16px',
              
              
              
              
            }}}>www.OnGuardOnline.gov</Text></Link> for social networking safety tips for parents and youth.</Text>
            </div>
            </Center>
            
            <Center>
            <Text fontSize='xl' color='#084c80' fontFamily='Poppins' marginBottom='40px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            
            
            
          }}}>Connect with us on Social Media</Text>
            </Center>
            
            <Center>
            <Flex marginBottom='40px'>
            <Link href='https://www.instagram.com/lunrcorp/'>
              <Button color='#084c80' fontFamily='Poppins' fontSize='40px' background='none'>
                <FaInstagram />
              </Button>
             </Link>    
  
            <Link href='https://www.linkedin.com/company/lunrcorp/'>
              <Button color='#084c80' fontFamily='Poppins' fontSize='40px' background='none'>
                <FaLinkedinIn />
              </Button>
            </Link>
            </Flex>
            </Center>


            <Center>
            <Flex marginBottom='40px'>
           
            <Button background='none'>
            <Link href='./learnMore'><Text color='#084c80' as='u' fontFamily='Poppins' fontSize='xl' marginRight='20px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            marginLeft:'14px'
            
            
            
            
          }}}>For Investors</Text></Link>
          </Button>
              
           
          <Button background='none'>
            <Link href='./privacy'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='xl' marginRight='20px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            
            
            
            
          }}}>Privacy Policy</Text>
          </Link>
          </Button>
            <Link href='/'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='xl'css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            
            
            
            
          }}}>Terms of Service</Text>
              
            </Link>
            <Link href='/'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='xl'  css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'16px',
            
            
            
            
          }}}>Careers</Text>
              
            </Link>

            </Flex>
            </Center>
          </Box>
          </Center>
        
      </div>
    
    
    
    
    
    </div>

    )
}


