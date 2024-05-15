



import styles from "@/styles/Home.module.css";
import {Center, Text, Flex, Spacer, Box, Button, Grid} from '@chakra-ui/react'
import Image from 'next/image'


export default function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Center w='100%' h='100%' flexDirection='column'>
           <div >
              <Flex>
              <Image src='/images/logo.png' width={200} height={400} alt='logo'/>
              <Text as='b' fontSize='3xl' marginRight='80px' marginLeft='80px' marginTop='80px'>About Lunr</Text>
              <Text as='b' fontSize='3xl' marginRight='80px' marginTop='80px'>Mission</Text>
              
              <Text as='b' fontSize='3xl' marginRight='80px' marginTop='80px'>Sirius</Text>
              <Text as='b' fontSize='3xl' color='blue' marginTop='80px'> Contact </Text>
              </Flex>
            </div>
      </Center>

      <div>
        <Center>
        <Box bg='blue' w='100%' h='800px'>
          <div style={{ position: 'relative', height: '800px' }}>
            <Image src='/images/rockethome.jpeg' layout='fill' objectFit='cover' alt='logo'/>
          </div>
        </Box>
        </Center>
      </div>

      <Center>
      <div style={{position: 'absolute' }}>
      
           <div style={{ marginTop:'-100px'}}>
             
              <Button backgroundColor="transparent" border="2px solid white" padding='30px'>
                <Text as='b' fontSize='2xl'>Learn More</Text>
              </Button>
              
             
            </div>
        
     

      </div>
      </Center>



      <div style={{marginTop:'80px'}}>
        <Center>
          <div>
            <Flex>
              <Box padding='40px' w='800px' marginTop='120px'>
                <Text as='b' fontSize='3xl'>Meet Sirius</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa. Suspendisse tincidunt dui quis augue fringilla, cursus auctor nibh placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis cursus, hendrerit leo et, condimentum felis. Mauris aliquam urna justo, sed varius neque sodales eu.</Text>
              </Box>
              <Spacer />
              <Box bg='blue' w='800px' h='300px'>
                <div style={{ position: 'relative', height: '500px' }}>
                  <Image src='/images/atmosphere.jpeg' layout='fill' objectFit='cover' alt='logo'/>
                </div>
              </Box>
            </Flex>
          </div>
        </Center>
      </div>

      <div style={{marginTop:'620px'}}>
        <Center>
          <div>
            <Flex>
            <Box bg='blue' w='800px' h='300px'>
                <div style={{position: 'relative', height: '500px' }}>
                  <Image src='/images/rocketimage1.jpeg' layout='fill' objectFit='cover' alt='logo'/>
                </div>
              </Box>
              <Spacer />
              <Box padding='40px' w='800px' marginTop='120px'>
                <Text as='b' fontSize='3xl'>Re-Inventing What it means to Touch The Sky</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam ultricies, placerat lorem at, lacinia mauris. Nulla congue massa vel molestie fermentum. Donec nec massa in velit posuere consectetur eleifend sed massa. Suspendisse tincidunt dui quis augue fringilla, cursus auctor nibh placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis cursus, hendrerit leo et, condimentum felis. Mauris aliquam urna justo, sed varius neque sodales eu.</Text>
              </Box>
              
              
            </Flex>
          </div>
        </Center>
      </div>
        

      <div style={{marginTop:'220px'}}>
      
        <Flex>
          
            <Box w='500px' h='10' bg='blue.500'>
              <Box bg='red' w='200px' h='40' marginLeft='40px'>
                <Text as='b' fontSize='2xl'>Payload</Text>
              </Box>
            </Box>

          <Spacer />
          <div style={{ minWidth: '500px', height: '80vh', position: 'relative' }}>
  <Image src='/images/rocket.png' layout='fill' objectFit='cover' objectPosition='center' alt='logo'/>
</div>
        <Spacer />
          <Box w='500px' h='10' bg='blue.500' />
        </Flex>
      </div>





    </div>
  );
}
