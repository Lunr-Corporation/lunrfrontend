import { Box, Button, Text, Flex, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from 'react';

export default function Home() {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
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
        value: 40,
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
            <Text as='b' fontSize='2xl'>Learn More</Text>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa. Suspendisse tincidunt dui quis augue fringilla, cursus auctor nibh placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis cursus, hendrerit leo et, condimentum felis. Mauris aliquam urna justo, sed varius neque sodales eu.
          </Text>
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
            <Text as='b' fontSize='2xl'>Learn More</Text>
          </Button>

        </Box>
      </Box>
      <Box bg='none' w='100vw' h='800px' position='relative'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
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
        >
          <Text bg='none' as='b' fontSize={{ base: 'md', md: 'xl' }}>Meet Sirius</Text>
          <Text mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa. Suspendisse tincidunt dui quis augue fringilla, cursus auctor nibh placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis cursus, hendrerit leo et, condimentum felis. Mauris aliquam urna justo, sed varius neque sodales eu.
          </Text>
          <Button backgroundColor="transparent" border="2px solid white" p='30px' marginTop='30px'>
            <Text as='b' fontSize='2xl'>Learn More</Text>
          </Button>
        </Box>
      </Box>


      
      <Box w='100vw' height={{ base: '1200px', md: '1700px' }} position='relative'   marginTop={{ base: '510px', md: '40px' }}>
        
        
        <div style={{ width: '100%', height: '100%', position: 'relative', padding:'10px'}} >
          <Image src='/images/rocketvert.png' layout='fill' objectFit='cover' alt='atmosphere' />
        </div>
        <Box   width='360px' zIndex='5' position='relative' marginTop='-1690px'>
          <Text as='b' fontSize='40px' margin='20px' color='blue'>Sirius Rocket</Text>
          
        </Box>
        <Box  width='360px' zIndex='6' position='relative'  marginTop={{ base: '0px', md: '110px' }} marginLeft={{ base: '0px', lg:'300px' }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Payload</Text>
          <Text color='white' marginLeft='20px' fontSize='lg' >Designed for microgravity</Text>
          <Text color='blue' fontSize='lg' marginLeft='20px'>100kg/200 lb</Text>
          <Text color='white' marginLeft='20px' fontSize='lg' >Nominal Payload Mass</Text>
        </Box>

        <Box width='360px' zIndex='6' position='relative' marginTop={{ base: '0px', md: '150px' }} marginLeft={{ base: '0px', lg:'300px' }}>
    <Text as='b' fontSize='2xl' margin='20px' color='white'>Avionics</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Telemetry System</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Power Storage</Text>
    <Text color='white' marginLeft='20px' fontSize='lg'> - Sensor Conditioning</Text>
  </Box>

        <Box  width='270px' zIndex='6' position='relative' marginLeft={{ md: '450px', sm: '0px', lg:'1120px' }} marginTop={{ base: '0px', md: '5px' }} >
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Liquid Engine</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Telemetry System</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Power Storage</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Sensor Conditioning</Text>
        </Box>

        <Box   width='270px' zIndex='6' position='relative'  marginTop={{ base: '0px', md: '40px' }} marginLeft={{ base: '0px', lg: '300px' }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Recovery Bay</Text>

          <Text color='white' marginLeft='20px' fontSize='lg'> - Reusable Second Stage</Text>
          
        </Box>

        <Box  width='270px' zIndex='6' position='relative' marginLeft={{ md: '450px', sm: '150px', lg:'1120px' }} marginTop={{ base: '0px', md: '5px' }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Stage 1 Avionics</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Telemetry System</Text>
          <Text color='white' marginLeft='20px' fontSize='lg'> - Power Storage</Text>
          <Text color='white' marginLeft='20px' > - Sensor Conditioning</Text>
        </Box>


        <Box  width='360px' zIndex='6' position='relative'  marginTop={{ base: '0px', md: '60px' }} marginLeft={{ base: '0px', lg: '300px' }}>
          <Text as='b' fontSize='2xl' margin='20px' color='white'>Solid Engine</Text>
          <Text color='white' marginLeft='20px'> - It has parachute</Text>
          <Text color='white' marginLeft='20px'> - Reusable Second Stage</Text>
          <Text color='white' marginLeft='20px'> - Rockets are nice</Text>
        </Box>

        <Box marginTop={{ base: '704px', md: '0px' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', opacity:'0.08'}} >
          <Image src='/images/cloud.png' width={2000} height={100} alt='atmosphere' />
        </div>
        </Box>
        
      </Box>

      


      
    </div>
  );
}
