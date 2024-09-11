import { Box, Image, Container, Text, Heading } from '@chakra-ui/react'

export default function About() {
    const styles= {
        Image: {
            borderRadius: '50%', 
            marginRight: '20px', 
        },
        Heading: {
            fontFamily: 'Creepster',
        },
    };

    return (
        <div>

            <Box>
                <Box display='flex' alignItems='center' boxSize='300px'>
                    <Image src='./src/assets/images/photo1.jpeg' alt='Photo of Elena Papanikolas' style={styles.Image} mx={4}  />
                </Box>  
            
                <Container>
                    <Box m={7} p={4} borderWidth={1} borderRadius='md' boxShadow='md' borderColor='black'>
                        <Heading style= {styles.Heading} display='flex' justifyContent='center'>
                            About Me
                        </Heading>

                        <Text mx={3} mt={4}>
                            Hey there! Im Elena, a passionate junior developer specializing in JavaScript, and eager to continue learning and expanding my skill set.
                        </Text>
                        <Text mx={3} mt={4}>
                            I&apos;m based out of Salt Lake City.
                        </Text>
                        <Text mx={3} mt={4}>
                            Welcome to my portfolio using React and Chakra UI. Thanks for being here!
                        </Text>
                    </Box>    
                </Container>
            </Box>

        </div>
        
    );
};