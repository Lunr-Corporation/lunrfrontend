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
import Head from 'next/head'

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
          <Head>
            <title>Terms and Conditions</title>
          </Head>
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

    <Box w='90vhpx' padding='40px'>
        <Center>
      <Text fontFamily='Poppins' color='#084c80' fontSize='xl' marginBottom='15px'>Effective Date: June 1st, 2023</Text>
      </Center>
      <Text color='white' fontFamily='Poppins' marginBottom='15px'>These Terms of Service (&quot;Terms&quot;) govern your use of the website located at https://www.lunrcorp.com (the &quot;Website&quot;), operated by Lunr, Corporation Inc a Canadian-based space startup (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Website.</Text>
      <Center>
        <Text  as='b' fontFamily='Poppins' color='#084c80'>1. Website Use and Restrictions:</Text>
      </Center>
      <Text color='white' fontFamily='Poppins' marginTop='15px'>a. You may use our Website for lawful purposes and in compliance with these Terms.
</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>- Violate any applicable laws, regulations, or third-party rights;
</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>- Engage in any unauthorized or unlawful activity;
</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>- Interfere with the proper functioning of the Website or disrupt its networks or servers;
</Text>
<Text color='white'  fontFamily='Poppins' marginTop='15px'>- Attempt to gain unauthorized access to any portion of the Website or any systems or networks connected to the Website.
</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>2. Intellectual Property:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. The content and materials available on our Website, including but not limited to text, graphics, logos, images, and software, are protected by intellectual property rights owned by us or our licensors. You agree not to reproduce, distribute, modify, or create derivative works of any content on our Website without our prior written consent.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'> 3. Third-Party Links and Content: </Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'> a. Our Website may contain links to third-party websites or services. We do not endorse, control, or assume any responsibility for the content, privacy policies, or practices of these third parties. You access and use third-party links and content at your own risk, and you should review their terms and privacy policies. </Text>


<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>4. Disclaimer of Warranties:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. We strive to provide accurate and up-to-date information on our Website; however, we do not warrant or guarantee the accuracy, reliability, or completeness of any information provided. You acknowledge and agree that your use of the Website is at your own risk.</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>b. The Website is provided on an &quot;as-is&quot; and &quot;as available&quot; basis, without any warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. </Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>5. Limitation of Liability:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of or inability to use the Website, even if we have been advised of the possibility of such damages.</Text>


<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>6. Indemnification:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. You agree to indemnify, defend, and hold harmless Lunr Corporation Inc, its affiliates, directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys&apos; fees, arising out of or in connection with your use of the Website or any violation of these Terms.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>7. Termination:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. We reserve the right to suspend or terminate your access to the Website at any time, without notice or liability, for any reason whatsoever.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>8. Governing Law and Jurisdiction:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of laws provisions. Any legal action or proceeding arising out of or relating to these Terms or your use of the Website shall be exclusively brought in the courts located in Toronto, Canada, and you consent to the personal jurisdiction of such courts.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>9. Changes to these Terms:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. We may modify these Terms at any time by posting the updated Terms on our Website. Your continued use of the Website after the posting of the revised Terms constitutes your acceptance of the changes. </Text>
<Center><Text color='white' fontFamily='Poppins' marginTop='15px'>please contact us at:</Text></Center>
<Center><Text color='white' fontFamily='Poppins' marginTop='15px'>Lunr Corporation Inc.</Text></Center>
<Center><Text fontFamily='Poppins' marginTop='15px' color='#084c80' as='b'>jeanue@lunrcorp.com</Text></Center>

<Center><Text color='white' fontFamily='Poppins' marginTop='40px'>By using our Website, you signify your acceptance of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Website.</Text></Center>

<Center><Text color='white' fontFamily='Poppins' marginTop='15px'>Thank you for entrusting us with your personal information.</Text></Center>



    </Box>

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