import { Box, Image, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function About() {
    const styles= {
        Image: {
            borderRadius: '50%', 
            marginRight: '20px', 
            maxHeight: '400px'
        },
        Heading: {
            fontFamily: 'Creepster',
        },
    };

    return (
        <SimpleGrid p={7} columns={{ base: 1, md: 2 }}>

            <Box m={7} p={4} borderWidth={1} borderRadius='md' boxShadow='md' borderColor='black'>
                <Heading style= {styles.Heading} display='flex' justifyContent='center'>
                    A Little About Me
                </Heading>

                <Text mx={3} mt={4}>
                    Hey there! I&apos;m Elena, a passionate junior developer specializing in JavaScript. I&apos;m eager to continue learning and expanding my skill set.
                </Text>
                <Text mx={3} mt={4}>
                    I&apos;m based out of Salt Lake City, and when I&apos;m not coding you can find me riding my bike or cooking up a storm.
                </Text>
                <Text mx={3} mt={4}>
                    Welcome to my portfolio, built using React and Chakra UI. Thanks for being here!
                </Text>
            </Box> 
            
            <Box m={7} p={4} display='flex' justifyContent='center' >
                <Image src='./images/photo1.jpeg' alt='Photo of Elena Papanikolas' style={styles.Image} mx={4}  />
            </Box>  
            
        </SimpleGrid>
        
    );
};