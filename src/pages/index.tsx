import { Box, Button, Text, Flex, Spacer, Center } from '@chakra-ui/react';
import Image from 'next/image';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from 'react';
import DashedLine from './dashedComponent';
import { FaChevronDown } from 'react-icons/fa';
import ProgressBar from './progressBar';
import Wave from './wave';
import LearnMore from './learnMore';
import Link from 'next/link'



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
      
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap' zIndex='2'>
        <Image src='/images/logo.png' width={200} height={400} alt='logo' />
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>About Lunr</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Mission</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Sirius</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} color='blue' my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Contact</Text>
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
      <Box bg='blue' w='100vw' h='800px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src='/images/rockethome.jpeg' layout='fill' objectFit='cover' alt='rocket' />
        </div>
        <Box position='absolute' bottom='0' width='100%' mb='40px' display='flex' justifyContent='center'>
          <Button backgroundColor="transparent" border="2px solid white" p='30px'>
            <Link href='./learnMore'><Text as='b' fontSize='2xl'>Learn More</Text></Link>
          </Button>
        </Box>
      </Box>

      <Box bg='none' w='100vw' h='800px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src='/images/atmosphere.jpeg' layout='fill' objectFit='cover' alt='atmosphere' />
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
          <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }}>Re-Inventing What it Means to Touch The Sky</Text>
          <Text mt={2}>
            Lunr aims to touch the stars by launching to LEO at 600 km in altitude even in the frigid temperatures of Canada. Lunr wants redefine what space-travel is and that it is possible to do so anywhere rather than a select few countries.
          </Text>
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
            <Text as='b' fontSize='2xl'>Learn More</Text>
          </Button>

        </Box>
      </Box>
      <Box bg='none' w='100vw' h='800px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex:'20' }}>
          <Image src='/images/rocketimage1.jpeg' layout='fill' objectFit='cover' alt='atmosphere' />
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
          <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }}>Meet Sirius</Text>
          <Text mt={2}>
            Named after the brightest star in Earth's night sky, Sirius will be a two-stage launch vehicle powered by a 9-cluster of high-performance liquid rocket engines, designed for efficient payload delivery to Low Earth Orbit (LEO) and beyond, marking a milestone as one of Canada's first orbital-class launch vehicles.
          </Text>
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
            <Text as='b' fontSize='2xl'>Learn More</Text>
          </Button>
        </Box>
      </Box>

      <Wave />
      
      <Box w='90vw' height={{ base: '1200px', md: '1300px' }} position='absolute' marginLeft='90px'  marginTop={{ base: '510px', md: '200px' }} css={{
        marginLeft:'0px'
      }}>
        
      <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative', zIndex:'1'}} >
        <Box css={{
              '@media screen and (min-width: 300px) and (max-width: 500px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'1300px'
                
                
              },
              '@media screen and (min-width: 700px) and (max-width: 920px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'-300px',
                width:'75%'
                
                
              },
              '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
                position: 'relative',
                marginLeft: '-6px',
                marginTop:'-230px',
                width:'55%'
    
              }


        }}>
        <video src='/images/insiderocket.mp4' style={{ maxWidth: '100%', maxHeight: '100%' }} autoPlay muted loop />
        </Box>
      </div>

        
        <Box  width='260px' zIndex='5' position='relative' marginTop='-1290px' marginBottom={{lg: '-20px', sm:'40px'}} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            marginTop: '-1690px',
            
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            marginTop:'-1490px'

          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
            marginTop:'-1490px'

          }


        }}>
          <Text as='b' fontSize='40px' margin='20px' color='blue' css={{
              '@media screen and (min-width: 700px) and (max-width: 920px)': {
                fontSize:'70px'
    
              },
              '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
                fontSize:'65px', 
                
    
              }

          }}>Specs</Text>
          
        </Box>
        <Box  width='270px' zIndex='6' position='relative'  marginTop={{ base: '0px', md: '10px' }} marginLeft={{ base: '0px', lg:'300px', md:'300px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              marginLeft: '0px',
              marginBottom:'40px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              marginLeft: '0px',
              marginBottom:'20px'
  
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px',
              marginTop: '20px'
              
  
            }
            
            
            }}>
          
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Payload</Text>
          <Text color='white' marginLeft='20px' fontSize='lg' >Designed for Sclability</Text>
          <Text color='blue' marginLeft='20px' as='b' fontSize='4xl'>200kg/441 lb</Text>
          <Text color='white' marginLeft='20px' fontSize='lg' >Nominal Payload Mass</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'>Payload Power Supply Based on Customer Requirements</Text>
        </Box>

        <Box width='270px' zIndex='6' position='relative' marginTop={{ base: '0px', md: '60px' }} marginLeft={{ base: '0px', lg:'300px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              marginLeft: '0px',
              marginBottom:'40px'
              
              
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px'
              
  
            }
    
    }}>
    <Text as='b' fontSize='2xl' margin='20px' color='white'>Avionics</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Telemetry System</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Power Storage</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Multiple Computers</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> Payload</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> First Stage</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> Second Stage</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> Second Stage TVC and RCS Integration</Text>
  </Box>

        <Box  width='270px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '0px', lg:'1120px' }} marginTop={{ base: '0px', md: '-310px' }} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            position: 'relative',
            marginLeft: '0px',
            marginBottom:'60px'
            
            
          }, 
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            position: 'relative',
            marginLeft: '510px',
            marginBottom:'60px'
            
            
          }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
            position: 'absolute',
            marginLeft: '570px',
            marginBottom:'60px'
          }
    
    
    
    }}>
      

          <Text as='b' fontSize='2xl' margin='20px' color='white'>Liquid Engine</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - RP-1 – Liquid Fuel (Fuel)</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - LOX – Liquid oxygen (Oxidizer)</Text>
          
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
              marginTop:'200px'
              
              
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
              marginLeft: '80px',
              marginBottom:'20px'
              
  
            }
    }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Recovery Bay</Text>

          <Text color='white' marginLeft='20px' fontSize='lg'> - Parachute for Solid Propellants</Text>
          
        </Box>
        
        <Box width='260px' zIndex='6' position='absolute' marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }} marginTop={{ base: '0px', md: '250px' }} css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
              position: 'relative',
              marginLeft: '0px',
              marginBottom:'60px'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
              position: 'absolute',
              marginLeft: '510px',
              marginBottom:'60px'
              
              
            }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
              position: 'absolute',
              marginLeft: '570px',
              marginBottom:'60px'
            }
    
    
    
    
    }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Aerodynamics</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - 4 base fins to control stability </Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Real time corrections</Text>
          <Text color='white' marginLeft='20px' > - Embedded into solid Motor</Text>
        </Box>


        <Box width='260px' zIndex='6' position='absolute'  marginTop={{ base: '0px', md: '5px' }} marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }}  css={{
    '@media screen and (width: 1024px)': {
      marginLeft: '0px',
      
    },
    '@media screen and (min-width: 700px) and (max-width: 920px)': {
      position: 'relative',
      marginLeft: '510px',
      marginBottom:'60px'
      
      
    }, '@media screen and (min-width: 1024px) and (max-width: 1400px)':{
      position: 'absolute',
      marginLeft: '570px',
      marginBottom:'60px'
    }
    
    
    
    }}>




          <Text as='b' fontSize='2xl' margin='20px' color='white'>Solid Engine</Text>
          <Text color='white' marginLeft='20px'> - HTPB, aluminum powder</Text>
          <Text color='white' marginLeft='20px'> - Ozone protector additives</Text>
          <Text color='white' marginLeft='20px'> - Rod and Tube grain design </Text>
          <Text color='white' marginLeft='20px'> - Single exit nozzle </Text>
        </Box>

        

        <Box marginTop={{ base: '704px', md: '300px'}} marginLeft={{lg: '-125px', md:'-125px', sm:'10px'}} css={{
          '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
            marginTop:'1050px'
            
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
            marginTop:'450px',
            marginLeft:'10px'
            
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
            marginTop:'520px',
            marginLeft:'10px'
            

          }
        }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', opacity:'0.08', zIndex:'10'}} >
          <Image src='/images/cloud.png' width={2000} height={100} alt='atmosphere' />
        </div>

        </Box>
          



        


        
        
      </Box>

      <ProgressBar/>


      <Box marginTop='1800px' >
        <Center>
          <Text color='blue' fontSize='50px' as='b' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
         position:'absolute',
          fontSize:'30px',
          marginTop:'1200px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          position:'absolute',
           fontSize:'50px',
           marginTop:'-700px'
           
           
         },
         '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
          position:'absolute',
           fontSize:'60px',
           marginTop:'-500px'
          

        }
         
      }}> Mission </Text>
        </Center>
      </Box>
      <Center>
    
      <Box bg='none' w='90vw' h='800px' position='relative' opacity='0.8'>
  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <Box css={{
      '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
        marginTop:'360px'
        
        
      },
      '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
        marginTop:'-460px'
        
        
      },
      '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
         marginTop:'-350px'
        

      }
      
    }}>
      <Image src='/images/MissionDiagram.png' layout='fill' objectFit='contain' alt='atmosphere' />
    </Box>
  </div>
</Box>
      </Center>
      <Box w='300px' position='absolute' marginTop='-650px' marginLeft='500px' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
          marginLeft:'9px',
          lineHeight: '2px',
          marginTop:'-60px',
          width:'60px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': 
          
          {
            
            marginLeft:'60px',
            lineHeight: '12px',
            marginTop:'-920px',
            width:'100px'
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            marginLeft:'80px',
            lineHeight: '18px',
            marginTop:'-820px',
            width:'100px'
           
   
         }
         
      }}>
        <Text as='b' fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'4px',
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': 
          
          {
            
            fontSize:'12px',
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            fontSize:'16px'
           
   
         }
          

          
          
          }}>First Stage Cutoff and Separation</Text>
      </Box>

      <Box w='250px' position='absolute' marginTop='-720px' marginLeft='800px' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
          marginLeft:'140px',
          lineHeight: '2px',
          marginTop:'-110px',
          width:'60px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          marginLeft:'340px',
            lineHeight: '12px',
            marginTop:'-1020px',
            width:'100px'
          
          
        },
        '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
          marginLeft:'420px',
          lineHeight: '18px',
          marginTop:'-950px',
          width:'100px'
         
 
       }

      }}>
        <Text as='b' fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'4px',
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': 
          
          {
            
            fontSize:'12px',
            
          }, '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            fontSize:'16px'
           
   
         }
          
          }}>Second Stage Separation</Text>
      </Box>

      <Box w='250px' position='absolute' marginTop='-770px' marginLeft='1040px' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
          marginLeft:'240px',
          lineHeight: '2px',
          marginTop:'-130px',
          width:'60px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          marginLeft:'540px',
            lineHeight: '12px',
            marginTop:'-1000px',
            width:'100px'
          
          
        },
        '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
          marginLeft:'720px',
          lineHeight: '18px',
          marginTop:'-930px',
          width:'100px'
         
 
       }

      }}>
        <Text as='b' fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'4px',
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': 
          
          {
            
            fontSize:'12px',
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            fontSize:'16px'
           
   
         }
          
          }}>Orbit Insertion</Text>
      </Box>

      <Box w='250px' position='absolute' marginTop='-550px' marginLeft='1120px' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
          marginLeft:'300px',
          lineHeight: '2px',
          marginTop:'-50px',
          width:'40px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          marginLeft:'620px',
          lineHeight: '12px',
          marginTop:'-870px',
          width:'60px'
          
          
        },
        '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
          marginLeft:'720px',
          lineHeight: '18px',
          marginTop:'-750px',
          width:'100px'
         
 
       }

      }}>
        <Text as='b' fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'4px',
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': {
            fontSize:'12px'
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            fontSize:'16px'
           
   
         }
          
          }}>Second Stage Burnup</Text>
      </Box>

      <Box w='250px' position='absolute' marginTop='-280px' marginLeft='1040px' css={{
        '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
          marginLeft:'200px',
          lineHeight: '2px',
          marginTop:'-40px',
          width:'40px'
          
          
        },
        '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
          marginLeft:'420px',
          lineHeight: '12px',
          marginTop:'-870px',
          width:'60px'
          
          
        },
        '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
          marginLeft:'520px',
          lineHeight: '18px',
          marginTop:'-750px',
          width:'100px'
         
 
       }
      }}>
        <Text as='b' fontSize='2xl' css={{
          
          '@media screen and (min-width: 300px) and (max-width: 500px)': 
          
          {
            
            fontSize:'4px',
            
          },
          '@media screen and (min-width: 700px) and (max-width: 920px)': 
          
          {
            
            fontSize:'12px',
            
          },
          '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
            fontSize:'16px'
           
   
         }
          
          
          
          }}>First Stage Recover</Text>
      </Box>





      <Box bg='linear-gradient(to bottom, rgba(0, 0, 255, 0.3), rgba(0, 0, 128, 0.3))' w='40vm' h='700' zIndex='4' position='absolute' marginTop='-840px' padding='4px' borderRight='1px solid gray' css={{
            '@media screen and (min-width: 300px) and (max-width: 500px)': {
            
              marginTop:'120px',
              marginLeft:'18%'
              
              
            },
            '@media screen and (min-width: 700px) and (max-width: 920px)': {
            
              marginTop:'-570px',
              marginLeft:'35%',
              
              
              
            },
            '@media screen and (min-width: 1024px) and (max-width: 1400px)': {
        
              marginTop:'-440px',
              marginLeft:'35%',
             
     
           },
            position:'absolute',
          
           marginTop:'-100px'



      }}>
        <Box  textAlign='right' padding='5px'  w='250px'>
          <Text fontSize='md' marginRight='160px'>LEO</Text>
          <Text marginTop='-25px' >600km</Text>
        </Box>
        <Box textAlign='right' padding='5px' marginTop='50px' w='250px'>
          <Text fontSize='md' marginRight='150px'>Orbit Insertion</Text>
          <Text marginTop='-25px' >200 - 600km</Text>
        </Box>
        <Box textAlign='right' padding='5px' marginTop='20px' w='250px'>
          <Text fontSize='md' marginRight='150px'>Second Stage Cutoff</Text>
          <Text marginTop='-25px' >150 - 500km</Text>
        </Box>
        
        <Box textAlign='right' padding='5px' marginTop='70px' w='250px'>
          <Text fontSize='md' marginRight='150px'> Beginning of Microgravity</Text>
          <Text marginTop='-25px' >80km</Text>
        </Box>
        <Box textAlign='right' padding='5px' marginTop='40px' w='250px'>
          <Text fontSize='md' marginRight='150px'>First Stage Cutoff and Separation</Text>
          <Text marginTop='-25px' >50km</Text>
        </Box>
        <Box  textAlign='right' padding='5px' marginTop='80px' w='250px'>
          <Text fontSize='md' marginRight='150px'>Pitch Maneuver</Text>
          <Text marginTop='-25px' >0.4km</Text>
        </Box>
        <Box textAlign='right' padding='5px' marginTop='4px' w='250px'>
          <Text fontSize='md' marginRight='150px'>Litftoff</Text>
          <Text marginTop='-25px' >0.8km</Text>
        </Box>
      </Box>
      
      




      

      


      
    </div>
  );
}

