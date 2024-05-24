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
import Contact from './contact';

import { Fade, Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import Head from 'next/head'





export default function Home() {
  


  const ThreeDashedLines = () => {
    return (
      <Flex justify="space-between">
        <DashedLine />
        <DashedLine />
        <DashedLine />
      </Flex>
    );
  };
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
        <title>Lunr</title>
      </Head>
      
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap' zIndex='2'>
        <Image src='/images/logo.png' width={200} height={400} alt='logo' />
        <Button background='None' _hover={{ background: 'rgba(8, 76, 128, 0.1)'}} zIndex='10'>
          <ScrollLink to='aboutLunr' smooth={true} duration={500}>
          <Text as='b' fontFamily='Poppins' fontSize={{ base: 'lg', md: 'lg' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }} color='white'>About Lunr</Text>
          </ScrollLink>
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
          >Empowering Humanity&apos;s Next Great Leap</Text>
          </Fade>
          
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='100px'>
          <ScrollLink to='aboutLunr' smooth={true} duration={500}>
          <Text as='b' fontSize='2xl' fontFamily='Poppins' color='white'>Get Started</Text>
          </ScrollLink>
          </Button>
          
        </Box>
        <Box position='absolute' bottom='0' width='100%' mb='40px' display='flex' justifyContent='center'>
          
        </Box>
      </Box>

      <Box bg='none' w='100vw' h='800px' position='relative'>
      <div style={{ width: '100%', height: '100%', position: 'relative' }} id='aboutLunr'>
        {/* Replace the Image component with your actual image */}
        <img src='/images/atmosphere.jpeg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='atmosphere' />
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
        <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }} fontFamily='Poppins'>Redefining What It Means to Touch The Sky</Text>
        <Text mt={2} fontFamily='Poppins' color='white'>
        At LUNR, innovation meets ambition. Founded on the belief that space should be within everyone&apos;s reach, we are breaking barriers and challenging norms. From the serene wilderness of Canada, we launch dreams into orbit — 600 kilometers above Earth into LEO. Explore how we are transforming the landscape of Canadian aerospace, one launch at a time.
        </Text>
        <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
        <ScrollLink to='mission' smooth={true} duration={500}>
          <Text as='b' fontSize='2xl' fontFamily='Poppins' color='white'>Our Mission</Text>
          </ScrollLink>
        </Button>
        </Fade>
      </Box>
      
    </Box>
      <Box bg='none' w='100vw' h='700px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex:'20'}}>
          <Image src='/images/atmosphere5.png' layout='fill' objectFit='cover' alt='atmosphere' />
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
          <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }} fontFamily='Poppins' color='white'>Meet Sirius</Text>
          <Text mt={2} fontFamily='Poppins' color='white'>
          Named after the brightest star in Earth&apos;s night sky, Sirius will be a two-stage launch vehicle designed for efficient payload delivery to Low Earth Orbit (LEO) and beyond, marking a milestone as one of Canada&apos;s first orbital-class launch vehicles.
          </Text>
          
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
            <ScrollLink to='rocket' smooth={true} duration={500}>
              <Text as='b' fontSize='2xl' fontFamily='Poppins' color='white'>Learn More</Text>
            </ScrollLink>
          </Button>
          </Fade>
        </Box>
      
      </Box>

      <Wave />
      
      <Center>
      <Box w='90vw' height={{ base: '1200px', md: '1300px' }} position='absolute' marginLeft='90px'  marginTop='2000px' css={{
        marginLeft:'0px'
      }}>
        
      <div id='rocket' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative', zIndex:'1'}} >
        <Box  css={{
              '@media screen and (min-width: 300px) and (max-width: 500px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'3400px'
                
                
              },
              '@media screen and (min-width: 700px) and (max-width: 920px)': {
                position: 'relative',
                marginLeft: '40px',
                marginTop:'-300px',
                width:'75%'
                
                
              },
              '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'-230px',
                width:'55%'
    
              },'@media screen and (min-width: 1280px) and (max-width:1400px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'-230px',
                width:'45%'
              }, '@media screen and (min-width:1400px)': {
                position: 'relative',
                
                marginTop:'140px',
                width:'35%'
              }


        }}>
        <video src='/images/rocketUpdatedVert3.mp4' style={{ maxWidth: '100%', maxHeight: '100%' }} autoPlay muted loop />
        </Box>
      </div>
      

        <div style={{textAlign: 'center'}}>
        <Center>
          <Text as='b' fontSize='50px' margin='20px' color='#084c80' fontFamily='Poppins' position='absolute' zIndex='12' marginTop='-2900px' css={{
              '@media screen and (min-width: 700px) and (max-width: 920px)': {
                fontSize:'70px'
    
              },
              '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
                fontSize:'65px', 
                
    
              }, '@media screen and (min-width: 1280px)': {
                fontSize:'65px',
                
              }
          }}>Sirius Specs</Text>
          </Center>
          </div>
     
          

        
        <Box width='260px' zIndex='5' marginLeft='20px' position='relative' marginTop='-1290px' marginBottom={{lg: '-20px', sm:'40px'}} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            marginTop: '-1690px',
            
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            marginTop:'-1490px'

          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
            marginTop:'-1490px'

          }, '@media screen and (min-width: 1280px)': {
            marginTop:'-1490px'

          }


        }}>
          
          
        </Box>
        
        <Box  width='270px' zIndex='6' position='relative'  marginTop={{ base: '0px', md: '10px' }} marginLeft={{ base: '0px', lg:'300px', md:'300px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              marginLeft: '0px',
              marginBottom:'40px',
              marginTop:'350px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              marginLeft: '0px',
              marginBottom:'20px',
              marginTop:'100px'
  
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px',
              marginTop: '120px'
              
  
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              marginLeft: '140px',
              marginBottom:'20px',
              marginTop: '40px'
            }, '@media screen and (min-width: 1400px)': {
              marginLeft: '300px',
              marginBottom:'20px',
              marginTop: '170px'
            },
            
            
            }}>
          <Slide direction='left'>
          <Text as='b' fontFamily='Poppins' fontSize='2xl' margin='20px' color='white'>Payload</Text>
          <Text color='white' fontFamily='Poppins'  marginLeft='20px' fontSize='lg' marginBottom='10px'>Designed for Sclability</Text>
          <Text color='#084c80' fontFamily='Poppins'  marginLeft='20px' as='b' fontSize='4xl' marginBottom='10px'>200kg/441 lb</Text>
          <Text color='white' fontFamily='Poppins'  marginLeft='20px' fontSize='lg' >Interchangeable payload adapters</Text>
          
          </Slide>
        </Box>

        <Box width='270px' zIndex='6' position='relative' marginTop={{ base: '0px', md: '60px' }} marginLeft={{ base: '0px', lg:'300px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              marginLeft: '0px',
              marginBottom:'40px'
              
              
            }, 
           
            
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px'
              
  
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              marginLeft: '140px',
              marginBottom:'20px',
              marginTop: '40px'
            }, '@media screen and (min-width: 1400px)': {
              marginLeft: '300px',
              marginBottom:'20px',
              marginTop: '70px'
            }
    
    }}>
    <Slide direction='left'>
    <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Avionics</Text>
    <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Multiple Flight Computers</Text>
    <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Redundancy</Text>
    <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Simple System Architecture</Text>
    <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> TVC and RCS Integration</Text>
    </Slide>
  </Box>

  <Box width='210px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '0px', lg:'1120px' }} marginTop={{ base: '0px', md: '-410px' }} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            position: 'relative',
            marginLeft: '0px',
            marginBottom:'60px'
            
            
          }, 
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            position: 'absolute',
            marginLeft: '500px',
            marginBottom:'60px',
            marginTop: '-450px'
            
            
          }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
            position: 'absolute',
            marginLeft: '570px',
            marginBottom:'60px',
            marginTop:'-450px'
            
          }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
            position: 'absolute',
            marginLeft: '690px',
            marginBottom:'60px',
            marginTop:'-380px'
          }, '@media screen and (min-width: 1400px)': {
            position: 'absolute',
            marginLeft: '950px',
            marginBottom:'60px',
            marginTop:'-450px'
          }
    
    
    
    }}>
      
          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Structure</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'>Height: 20m</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg'>Diameter: 2.3m</Text>
          
          </Slide>
        </Box>

        <Box width='220px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '0px', lg:'1120px' }} marginTop={{ base: '0px', md: '-410px' }} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            position: 'relative',
            marginLeft: '0px',
            marginBottom:'60px'
            
            
          }, 
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            position: 'absolute',
            marginLeft: '515px',
            marginBottom:'60px',
            marginTop: '-340px'
            
            
          }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
            position: 'absolute',
            marginLeft: '590px',
            marginBottom:'60px',
            marginTop:'-340px'
            
          }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
            position: 'absolute',
            marginLeft: '700px',
            marginBottom:'60px',
            marginTop:'-260px'
          }, '@media screen and (min-width: 1400px)': {
            position: 'absolute',
            marginLeft: '960px',
            marginBottom:'60px',
            marginTop:'-320px'
          }
    
    
    
    }}>
      
          <Slide direction='right'>
            <Center>
          <Text fontFamily='Poppins'  as='b' fontSize='35px' color='#084c80'>Second Stage</Text>
          </Center>
          
          </Slide>
        </Box>





        <Box width='220px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '0px', lg:'1120px' }} marginTop={{ base: '0px', md: '-310px' }} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            position: 'relative',
            marginLeft: '0px',
            marginBottom:'60px'
            
            
          }, 
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            position: 'absolute',
            marginLeft: '500px',
            marginBottom:'60px',
            marginTop:'-220px'
            
            
          }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
            position: 'absolute',
            marginLeft: '570px',
            marginBottom:'60px',
            marginTop:'-230px'
          }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
            position: 'absolute',
            marginLeft: '690px',
            marginBottom:'60px',
            marginTop:'-150px',
          }, '@media screen and (min-width: 1400px)': {
            position: 'absolute',
            marginLeft: '950px',
            marginBottom:'60px',
            marginTop:'-150px'
          }
    
    
    
    }}>
      
          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Liquid Engine</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Gas Generator Cycle</Text>
          <Text fontFamily='Poppins'  color='#084c80' marginLeft='20px' fontSize='lg' marginTop='3px' as='b' marginBottom='10px'> RP-1 – Liquid Fuel</Text>
          <Text fontFamily='Poppins'  color='#084c80' marginLeft='20px' fontSize='lg' as='b'> LOX – Liquid oxygen (Oxidizer)</Text>
          
          </Slide>
        </Box>

        <Box width='270px' zIndex='6' position='absolute'  marginTop={{ base: '0px', md: '60px' }} marginLeft={{ base: '0px',  md:'300px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              position: 'relative',
              marginLeft: '0px',
              marginBottom:'60px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              position: 'absolute',
              marginLeft: '0px',
              marginBottom:'60px',
              marginTop:'40px'
              
              
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px'
              
  
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              marginLeft: '140px',
              marginBottom:'20px',
              marginTop: '40px'
            }
    }}>   
          <Slide direction='left'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Recovery Options</Text>

          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> First Designed for Parachute for Capture Recovery.</Text>
          </Slide>
          
        </Box>
        
        <Box width='260px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }} marginTop={{ base: '0px', md: '250px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              position: 'relative',
              marginLeft: '0px',
              marginBottom:'60px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              position: 'absolute',
              marginLeft: '0px',
              marginBottom:'60px',
              marginTop:'300px'
              
              
            }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
              position: 'absolute',
              marginLeft: '80px',
              marginBottom:'60px',
              marginTop:'280px'
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              position: 'absolute',
              marginLeft: '140px',
              marginBottom:'60px'
            }, '@media screen and (min-width: 1400px)': {
              position: 'relative',
              marginLeft: '300px',
              marginBottom:'60px',
              marginTop: '400px'
            
            }
    
    
    
    
    }}>
          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Aerodynamics</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Sleek Design </Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Reduced Aerodynamic Load</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg'> Controls Fins on First Stage</Text>
          </Slide>
        </Box>

        <Box  width='200px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }} marginTop={{ base: '0px', md: '250px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              position: 'relative',
              marginLeft: '0px',
              marginBottom:'60px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              position: 'absolute',
              marginLeft: '520px',
              marginBottom:'60px',
              marginTop:'0px',
              
              
              
              
            }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
              position: 'absolute',
              marginLeft: '590px',
              marginBottom:'60px',
              marginTop: '0px'
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              position: 'absolute',
              marginLeft: '690px',
              marginBottom:'60px',
              marginTop:'80px',
            }, '@media screen and (min-width: 1400px)': {
              position: 'absolute',
              marginLeft: '970px',
              marginBottom:'60px',
              marginTop: '-530px'
            
            }
    
    
    
    
    }}>
          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='35px'  color='#084c80'>First Stage</Text>
          
          </Slide>
        </Box>

        <Box width='220px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }} marginTop={{ base: '0px', md: '250px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              position: 'relative',
              marginLeft: '0px',
              marginBottom:'60px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              position: 'absolute',
              marginLeft: '500px',
              marginBottom:'60px',
              marginTop:'60px'
              
              
            }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
              position: 'absolute',
              marginLeft: '570px',
              marginBottom:'60px',
              marginTop:'70px'
            }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
              position: 'absolute',
              marginLeft: '690px',
              marginBottom:'60px',
              marginTop:'130px'
            }, '@media screen and (min-width: 1400px)': {
              position: 'absolute',
              marginLeft: '950px',
              marginBottom:'60px',
              marginTop: '-430px'
            
            }
    
    
    
    
    }}>
          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Materials</Text>
            <Text color='#084c80' fontSize='lg' fontFamily='Poppins'   marginLeft='20px' >Solid Rocket Nozzle:</Text> 
            <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> Graphite  </Text>
            <Text color='#084c80' fontSize='lg' fontFamily='Poppins'  marginLeft='20px' >Liquid Rocket Engine:</Text>
            <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' >Inconel 718  </Text>
            <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' >Chromium Zirconium </Text>
            <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' >Aluminum Alloy </Text>
          </Slide>
        </Box>


        <Box width='220px' zIndex='6' position='absolute'  marginTop={{ base: '0px', md: '5px' }} marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }}  css={{
    '@media screen and (width: 1024px)': {
      marginLeft: '0px',
      
    },
    '@media screen and (min-width: 700px) and (max-width: 920px)': {
      position: 'absolute',
      marginLeft: '500px',
      marginBottom:'60px',
      marginTop:'300px'
      
      
    }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
      position: 'absolute',
      marginLeft: '570px',
      marginBottom:'60px',
      marginTop:'320px'
    },
    '@media screen and (min-width: 1280px) and (max-width:1400px)': {
      position: 'absolute',
      marginLeft: '690px',
      marginBottom:'60px',
      marginTop:'380px'
    }, '@media screen and (min-width: 1400px)': {
      position: 'absolute',
      marginLeft: '950px',
      marginBottom:'60px',
      marginTop:'-200px'
    }
    
    
    
    }}>



          <Slide direction='right'>
          <Text fontFamily='Poppins'  as='b' fontSize='2xl' margin='20px' color='white'>Solid Engine</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' > Researched </Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'>Propellants</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg'> Ozone protector</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg' marginBottom='10px'> additives</Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='20px' fontSize='lg'> Rod and Tube grain design: </Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='40px' fontSize='lg'> HTPB </Text>
          <Text fontFamily='Poppins'  color='white' marginLeft='40px' fontSize='lg'> Aluminum Powder</Text>
          </Slide>
        </Box>

        

        
          



        


        
        
      </Box>
      </Center>
      <ProgressBar/>

      

      <Box marginTop='1900px' >
        <Center>
          <Text color='#084c80' fontSize='50px' as='b' fontFamily='Poppins' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
         position:'absolute',
          fontSize:'30px',
          marginTop:'2900px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          position:'absolute',
           fontSize:'50px',
           marginTop:'-620px'
           
           
         },
         '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
          position:'absolute',
           fontSize:'60px',
           marginTop:'-540px'
          

        }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
          position:'absolute',
           fontSize:'60px',
           marginTop:'-300px'
        }, 
         
      }}> Mission </Text>
        </Center>
      </Box>
    
      <Center>
      
      <Fade>
      <Box bg='none' w='90vw' h='800px' position='relative' opacity='0.8'>
  <div style={{ width: '100%', height: '100%', position: 'relative' }} id='mission'>
    <Box css={{
      '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
        marginTop:'1200px'
        
        
      },
      '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
        marginTop:'-460px'
        
        
      },
      '@media screen and (min-width: 1024px) and (max-width: 1280px)': {
        
         marginTop:'-350px'
        

      }, '@media screen and (min-width: 1280px) and (max-width:1400px)': {
        marginTop:'-150px'
      }
      
    }}>
      <Image src='/images/MissionUpdated.png' layout='fill' objectFit='contain' alt='atmosphere' />
    </Box>
  </div>
</Box>
</Fade>
      </Center>
      
      
      
    
      <Center>

      <div style={{marginTop:'1400px'}}>
        
      </div>
      <div style={{ 
        width: '60%', height: '4%', position: 'absolute', marginTop: '140px'}}>
          <Center>
            <Text color='white' fontSize='3xl' fontFamily='Poppins'>Affiliated With</Text>
          </Center>
        <Box marginLeft='400px'>
          <Image src='/images/uoft.png' layout='fill' objectFit='contain' alt='atmosphere' />
        </Box>
      </div>
      </Center>






      <div style={{marginTop:'40px'}} id='contact'>
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
  );
}

