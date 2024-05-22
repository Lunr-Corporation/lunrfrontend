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
            <title>Privacy Policy </title>
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

    <Box w='90vhpx' padding='40px'>
        <Center>
      <Text fontFamily='Poppins' color='#084c80' fontSize='xl' marginBottom='15px'>Effective Date: June 1st, 2023</Text>
      </Center>
      <Text color='white' fontFamily='Poppins' marginBottom='15px'>Thank you for visiting Lunr Corporation Inc, a Canadian-based space startup (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, located at https://www.lunrcorp.com (the &quot;Website&quot;). We are committed to safeguarding your privacy and ensuring the security of your personal information. Please read this Privacy Policy carefully to understand our practices regarding your personal information.</Text>
      <Center>
        <Text as='b' fontFamily='Poppins' color='#084c80'>1. Information We Collect</Text>
      </Center>
      <Text color='white' fontFamily='Poppins' marginTop='15px'>a. Personal Information: When you visit our Website, we may collect certain personal information that you voluntarily provide to us, such as your name, email address, telephone number, and any other information you choose to share with us through contact forms or other means.
</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>b. Log Data: Our servers automatically collect information sent by your browser when you visit our Website. This log data may include your IP address, browser type and version, pages visited, time and date of your visit, and other statistics.
</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Cookies and Similar Technologies: We use cookies and similar technologies to enhance your experience on our Website. These technologies collect certain information automatically, such as your device type, browser information, and browsing patterns. You can manage your cookie preferences through your browser settings.
</Text>
<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>2. Use of Information</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Provide and improve our services and Website functionality;</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Respond to your inquiries and communicate with you;</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Customize and personalize your experience on our Website;</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Send you updates, newsletters, and promotional materials related to our services</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Analyze and monitor usage patterns and trends to enhance our Website and services;</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Protect our rights, property, and safety, as well as the rights, property, and safety of others.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'> 3. Disclosure of Information: </Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'> a. We may share your personal information with:</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Third-party service providers who assist us in operating our Website and delivering our services (e.g., hosting providers, analytics providers)</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>Government authorities, law enforcement agencies, or other third parties as required by applicable laws and regulations or to protect our legal rights.</Text>
<Text color='white' fontFamily='Poppins' marginTop='15px'>b. We will not sell, trade, or rent your personal information to third parties for marketing purposes without your consent.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>4. Data Security:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission or storage over the internet is 100% secure, and we cannot guarantee absolute security.</Text>


<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>5. Third-Party Links:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. Our Website may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of those third parties before providing any personal information.</Text>


<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>6. Children&apos;s Privacy:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us, and we will promptly delete the information.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>7. Your Rights:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. You have the right to access, update, or delete your personal information held by us. If you would like to exercise any of these rights or have any questions or concerns regarding our Privacy Policy, please contact us using the information provided below.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>8. Changes to this Privacy Policy:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>a. We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated Privacy Policy will be posted on our Website, and the revised effective date will be indicated. We encourage you to review this Privacy Policy periodically.</Text>

<Center><Text fontFamily='Poppins' color='#084c80' as='b' marginTop='15px'>9. Contact Us:</Text></Center>
<Text color='white' fontFamily='Poppins' marginTop='15px'>If you have any questions or concerns regarding this Privacy Policy or our privacy practices </Text>
<Center><Text color='white' fontFamily='Poppins' marginTop='15px'>please contact us at:</Text></Center>
<Center><Text color='white' fontFamily='Poppins' marginTop='15px'>Lunr Corporation Inc.</Text></Center>
<Center><Text  fontFamily='Poppins' marginTop='15px' color='#084c80' as='b'>jeanue@lunrcorp.com</Text></Center>

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