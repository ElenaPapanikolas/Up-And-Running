
import { Box, Image, Container, Text, Heading } from '@chakra-ui/react'


export default function AboutMe() {
    const styles= {
        Image: {
            borderRadius: '50%', // Makes image round
            marginRight: '20px', // Space between image and heading
            
        },
        Heading: {
            fontFamily: 'Creepster',
        }
    }

    return (
         <div>
        <Box display="flex" alignItems="center" boxSize="300px">
            <Image src="./src/assets/images/photo1.jpeg" alt="Photo of Elena Papanikolas" style={styles.Image} mx={3} />
        </Box>  
        
        <Container>
            <Box>
                <Heading style= {styles.Heading}>
                    About Me
                </Heading>
                <Text mx={3} mt={4}>
                    Hey there! Im Elena, a passionate junior developer specializing in JavaScript, and eager to continue learning and expanding my skill set.
                </Text>
            </Box>    
        </Container>

        </div>
        
    );
}