import Navigation from './Navigation';
import { Box, Heading } from '@chakra-ui/react'


export default function Header() {
    const styles = {
        Nav: {
            fontFamily: 'Creepster',
            fontSize: '30px', 
            color: 'var(--black)',
        },
        Header: {
            fontFamily: 'Creepster',
            fontSize: '60px',
            color: 'var(--black)',
            whiteSpace: 'nowrap',
        }, 
    }
   
    return (
        <Box display='flex' justifyContent='space-between' style= {styles.Nav} >
             
            <Heading style= {styles.Header} mx={3} mt={4}>
            Elena Papanikolas
            </Heading>

            <Navigation/>

        </Box>
    );
};