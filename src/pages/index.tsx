import { Center, Text, Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
        
        <div>
        <Flex direction={{  md: 'row' }} align='center'>
          <Image src='/images/logo.png' width={200} height={400} alt='logo' />
          <Text as='b' fontSize={{ base: 'xl', md: '3xl' }} my={{ base: 4, md: 2 }} mx={{ base: 5, md: 20 }}>About Lunr</Text>
          <Text as='b' fontSize={{ base: 'xl', md: '3xl' }} my={{ base: 4, md: 0 }} mx={{ base: 5, md: 20 }}>Mission</Text>
          <Text as='b' fontSize={{ base: 'xl', md: '3xl' }} my={{ base: 4, md: 0 }} mx={{ base: 5, md: 20 }}>Sirius</Text>
          <Text as='b' fontSize={{ base: 'xl', md: '3xl' }} color='blue' my={{ base: 4, md: 0 }} mx={{ base: 5, md: 20 }}>Contact</Text>
        </Flex>
        </div>
        
        <Center>
        <Box bg='blue' w='200%' h='800px' position='relative' marginTop='-40px' width={{ base: '4000px', md: '100%' }}>
         

            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

          
          <Center>
          <Box  position='absolute' bottom='0' mb='40px'> 
            <Button backgroundColor="transparent" border="2px solid white" p='30px'>
              <Text as='b' fontSize='2xl'>Learn More</Text>
            </Button>
          </Box>
        </Center>
        </Box>
        </Center>
      

      

      <Center my='80px'>
        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center'>
          <Box p='40px' w={{ base: '100%', md: '800px' }} my={{ base: 4, md: 0 }}>
            <Text as='b' fontSize='3xl'>Meet Sirius</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa. Suspendisse tincidunt dui quis augue fringilla, cursus auctor nibh placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis cursus, hendrerit leo et, condimentum felis. Mauris aliquam urna justo, sed varius neque sodales eu.</Text>
          </Box>
          <Spacer />
          <Box bg='blue' w={{ base: '100%', md: '800px' }} h={{ base: '200px', md: '300px' }}>
            <Box position='relative' height='100%'>
              
            </Box>
          </Box>
        </Flex>
      </Center>

      <Center my='200px'>
        <Box bg='blue' w='100%' h='800px' position='relative'>
          <Box
            textAlign='left'
            zIndex='5'
            width={{ base: '80%', md: '400px' }}
            top={{ base: '10%', md: '30px' }}
            right={{ base: '5%', md: '10%' }}
            position='absolute'
          >
            <Text zIndex='5' as='b' fontSize='3xl' color='white'>Re-Inventing What it Means to Touch the Stars</Text>
            <Box width='100%' mt='20px'>
              <Text zIndex='5' fontSize='xl' color='white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa.
              </Text>
            </Box>
            <Box mt='30px'>
              <Button backgroundColor="transparent" border="2px solid white" p='30px'>
                <Text as='b' fontSize='2xl'>Learn More</Text>
              </Button>
            </Box>
          </Box>
          <Box position='relative' height='100%'>
            
          </Box>
        </Box>
      </Center>

      <Center my='220px'>
        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center'>
          <Box w={{ base: '100%', md: '500px' }} h='10' bg='blue.500'>
            <Box position='absolute' width={{ base: '90%', md: '400px' }} p='20px' mt={{ base: '100px', md: '0' }}>
              <Text as='b' fontSize='3xl'>Payload</Text>
              <Box>
                <Text>Designed for microgravity and research and technology development.</Text>
              </Box>
              <Box>
                <Text as='b' color='blue' fontSize='3xl'>100 Kg / 200 lb</Text>
                <Text>- Nominal Payload Mass</Text>
                <Text>- Up to 4 Individual Payload compartments</Text>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box width='100%' minWidth='500px' height='150vh' position='relative'>
            
          </Box>
          <Spacer />
          <Box w={{ base: '100%', md: '500px' }} h='10' bg='blue.500' />
        </Flex>
      </Center>

      {/* ...rest of your code... */}
    </div>
  );
}
