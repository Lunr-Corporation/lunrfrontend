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
import { Link as ScrollLink } from 'react-scroll';

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
          
          <Flex bg='none'direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap' zIndex='2'>
            <Image src='/images/logo.png' width={200} height={400} alt='logo' />
            <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
            <Link href='/'>
                <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>About Lunr</Text>
                </Link>
            </Button>
            <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
            <Link href='./learnMore'>
                <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>For Investors</Text>
                </Link>
            </Button>
            <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
            <Link href='/'>
                <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>Mission</Text>
                </Link>
            </Button>
            <Button background='none' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
            <Link href='/'>
                <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>Siruis</Text>
                </Link>
            </Button>
            <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'><ScrollLink to='contact' smooth={true} duration={500}><Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} color='#084c80' my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Contact</Text></ScrollLink></Button>
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
              <Image src='/images/investor.jpeg' layout='fill' objectFit='cover' alt='rocket' />
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
            
           
   
         }}}> An Opportunity Worth Pursuing</Text>
         </Center>
                </Fade>
            </Box>

          </Box>

        <Center>
            
          <Box bg='rgba(0, 0, 0, 0.8)' w='70vw' h='800px' position='relative'>
            <Fade>
            <Text fontFamily='Poppins' fontSize='2xl' marginTop='180px' color='white' >The space industry is growing at an exponential rate, with no signs of slowing down. Let's take a look at some compelling facts from EuroConsults 2022 Space Economy Report and the Polaris Market Research Report:</Text>
            </Fade>
            <Center>
            <Fade>
            <Box w='35vw' h='50px' position='relative' marginTop='140px' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            marginLeft:'-120px',
            
          }}}>
                    <Flex>
                        <Box marginRight='40px'>
                            <Text fontSize='xl' color='white' as='u'>Fact</Text>
                            <Text fontSize='xl' color='white' >CAGR</Text>
                            <Text fontSize='xl' color='white' >Global Valuation</Text>
                            <Text fontSize='xl' color='white' >Valuation Forecast</Text>
                        </Box>
                        <Box marginRight='40px'>
                            <Text fontSize='xl' color='white' as='u'>Data</Text>
                            <Text fontSize='xl' color='#084c80'>15.5%</Text>
                            <Text fontSize='xl' color='#084c80'>$464 Billion</Text>
                            <Text fontSize='xl' color='#084c80'>$1 Trillion</Text>
                        </Box>
                        <Box marginRight='40px'>
                            <Text fontSize='xl' color='white' as='u'>Year(s)</Text>
                            <Text fontSize='xl' color='white' >From 2022 - 2030</Text>
                            <Text fontSize='xl' color='white' >2022</Text>
                            <Text fontSize='xl' color='white' >By 2040</Text>
                        </Box>
                    </Flex>
                
            </Box>
            </Fade>
            </Center>

          </Box>
          </Center>

          <Box bg='none' w='100vw' h='800px' position='relative' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            marginTop:'300px',
            
          }}}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* Replace the Image component with your actual image */}
        <img src='/images/toronto.jpeg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='atmosphere' />
        <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }} />
      </div>
      <Box
    
        marginTop='40px'
        position='absolute'
        top={{ base: '10px', md: '20px' }}
        right={{ base: '10px', md: '20px' }}
        p={4}
        bg='transparent'
        color='white'
        maxW={{ base: '90%', md: '40%' }} // Ensures the box doesn't exceed the image width
        
      >
        <Fade>
        <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }} color='white' fontFamily='Poppins'>Seize the opportunity to invest in a historic and groundbreaking moment for Canada.</Text>
        <Text color='white' mt={2} fontFamily='Poppins' >
        We are Canada's first and only private space company, and we will design and build reusable rockets and spacecraft for commercial and private use. We have future visions of launching a mission to the moon and securing Canada's place as a global space leader. Through domestic launches, Canada will establish itself as a serious player in the highly competitive space race. 
        </Text>
        <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
          <Link href='/'>
            <Text as='b' fontSize='2xl' fontFamily='Poppins' color='white'>Learn More</Text>
          </Link>
        </Button>
        </Fade>
      </Box>
      </Box>

    <Box bg='none' w='100vw' h='800px' position='relative'>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* Replace the Image component with your actual image */}
        <img src='/images/canada.jpeg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='atmosphere' />
        <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.3)' 
    }} />
      </div>
      <Box
    
        marginTop='40px'
        position='absolute'
        top={{ base: '10px', md: '20px' }}
        left={{ base: '10px', md: '20px' }}
        p={4}
        bg='transparent'
        color='white'
        maxW={{ base: '90%', md: '40%' }} // Ensures the box doesn't exceed the image width
        
      >
        <Fade>
        <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }} color='white' fontFamily='Poppins'>Canadian Growth in Space</Text>
        <Text color='white' mt={2} fontFamily='Poppins'>
        According to a publication by the Canadian Space Agency, in 2019, the space sector made revenues of $5.5 Billion and contributed $2.5 Billion to the Canadian GDP, while providing nearly 10,000 jobs. We see no slowing down, and we are ready for the explosion of potential.

We are in communication with the President of the Canadian Space Agency, the Premier of Nova Scotia, and the Nova Scotia Provincial Government regarding Lunr.
        </Text>
        <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
          <Link href='/'>
            <Text as='b' fontSize='2xl' fontFamily='Poppins' color='white' >Learn More</Text>
          </Link>
        </Button>
        </Fade>
      </Box>
      </Box>


      <Center>
      <Box marginTop='140px'>
        <Text fontFamily='Poppins' color='white'  fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            marginLeft:'30px',
            
          }
           
   
         }}>Feel Free to send us email at: <Button background='none' fontFamily='Poppins' fontSize='2xl' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}}><Link href='mailto:jeanue@lunrcorp.com'><Text color='white' fontFamily='Poppins'>jeanue@lunrcorp.com</Text></Link></Button></Text>


      </Box>
      </Center>

      <div style={{marginTop:'120px'}} id='contact'>
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


