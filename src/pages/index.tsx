import { Box, Button, Text, Flex, Spacer } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' wrap='wrap'>
        <Image src='/images/logo.png' width={200} height={400} alt='logo' />
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>About Lunr</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Mission</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Sirius</Text>
        <Text as='b' fontSize={{ base: 'xl', md: '2xl' }} color='blue' my={{ base: 3, md: 0 }} mx={{ base: 2, md: 15 }}>Contact</Text>
      </Flex>

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
    </div>
  );
}
