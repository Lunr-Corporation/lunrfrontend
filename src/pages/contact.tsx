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
import LearnMore from './learnMore';
import Link from 'next/link'

import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import Head from 'next/head'




export default function Contact() {


    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return ( 
    <div style={{ backgroundColor: 'black' }}> 
      <Head>
        <title>Contact</title>
      </Head>
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
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap' zIndex='2'>
        <Image src='/images/logo.png' width={200} height={400} alt='logo' />
        <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
        <Link href='/'>
          <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>About Lunr</Text>
          </Link>
        </Button>
        <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
          <Link href='./learnMore'>
            <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>For Investors</Text>
            </Link>
          </Button>
        
        <Button  background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'><ScrollLink to='mission' smooth={true} duration={500}><Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>Mission</Text></ScrollLink></Button>
        <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'><ScrollLink to='rocket' smooth={true} duration={500}><Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>Sirius</Text></ScrollLink></Button>
        <Link href='./contact'>
        <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'><Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} color='#084c80' my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Contact</Text></Button>
        </Link>
      </Flex>

      <Box bg='#084c80' w='100vw' h='800px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src='/images/home.png' layout='fill' objectFit='cover' alt='rocket' />
        </div>
        <Box
        
          marginTop='40px'
          position='absolute'
          top={{ base: '10px', md: '20px' }}
          left={{ base: '10px', md: '20px' }} // Adjusted to left instead of right
          p={4}
          bg='transparent'
          color='white'
          maxW={{ base: '90%', md: '40%' }} // Ensures the box doesn't exceed the image width
          zIndex='21'
          
          
        
      >
          <Fade>
          <Text bg='none' as='b' fontFamily='Poppins' color='white' css={{
                          '@media screen and (min-width: 300px) and (max-width: 500px)': {
                            fontSize:'42px'
                            
                            
                          },
                          '@media screen and (min-width: 700px) and (max-width: 920px)': {
                            fontSize:'55px'
                            
                            
                          },
                          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
                            fontSize:'60px'
                
                          },'@media screen and (min-width: 1280px) and (max-width:1400px)': {
                            position: 'relative',
                            marginLeft: '-6px',
                            marginTop:'-230px',
                            width:'45%'
                          }, '@media screen and (min-width:1400px)': {
                            fontSize:'80px'
                          }
            
            
                    }}
          >Contact Us</Text>

            <Flex marginBottom='40px' marginTop='40px'>
                <Link href='https://www.instagram.com/lunrcorp/'>
                <Button color='white' fontFamily='Poppins' fontSize='60px' background='none'>
                    <FaInstagram />
                </Button>
                </Link>    
    
                <Link href='https://www.linkedin.com/company/lunrcorp/'>
                <Button color='white' fontFamily='Poppins' fontSize='60px' background='none'>
                    <FaLinkedinIn />
                </Button>
                </Link>
                </Flex>

                <Box marginTop='10px'>
        <Text fontFamily='Poppins' color='white'  fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            marginTop:'270px',
            
          }
           
   
         }}>Feel Free to send us email at: <Button marginLeft='-13px' background='none' fontFamily='Poppins' fontSize='2xl' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}}><Link href='mailto:jeanue@lunrcorp.com'><Text color='white' fontFamily='Poppins'>jeanue@lunrcorp.com</Text></Link></Button></Text>


      </Box>
          </Fade>
          
          
          
        </Box>
        <Box position='absolute' bottom='0' width='100%' mb='40px' display='flex' justifyContent='center'>
          
        </Box>
      </Box>

      <div style={{marginTop:'0px'}} id='contact'>
        <hr />
          
          <Center>
          <Box padding='5px'>
            <Center>
            <Image src='/images/logo.png' width={200} height={400} alt='logo' />
            </Center>
            <Center>
            <Text marginTop='-10px' fontSize='sm' fontFamily='Poppins' color='#084c80' marginBottom='10px'>© 2023 Lunr Corporation. All Rights Reserved.</Text>
            </Center>
            <Center>
              <Text fontFamily='Poppins' color='#084c80' marginBottom='10px' fontSize='12px'>Visit www.OnGuardOnline.gov </Text>
            </Center>
            <Center>
            <Text fontFamily='Poppins' color='#084c80' marginBottom='10px' fontSize='12px'>for social networking safety tips for parents and youth.</Text>
            </Center>
            
            <Center>
            <Text fontSize='sm' color='#084c80' fontFamily='Poppins' marginBottom='40px'>Connect with us on Social Media</Text>
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
            <Flex marginBottom='40px' w='300px'>
              
           <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)' }}>
            <Link href='./privacy'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='sm' marginRight='20px'>Privacy Policy</Text>
              
            </Link>
            </Button>
            <Button background='none' marginRight='10px' marginLeft='15px' _hover={{ background: 'rgba(8, 76, 128, 0.1)' }}>
            <Link href='./terms'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='sm' marginRight='20px'>Terms of Service</Text>
              
            </Link>
            </Button>
            <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)' }}>
            <Link href='./careers'>
              
                <Text color='#084c80' as='u' fontFamily='Poppins' fontSize='sm' marginRight='20px'>Careers</Text>
              
            </Link>
            </Button>

            </Flex>
            </Center>
          </Box>
          </Center>
        
      </div>





      </div>
    )
}