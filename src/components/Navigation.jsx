import { NavLink, useLocation } from 'react-router-dom';
import { Stack, Box, } from '@chakra-ui/react';

export default function Navigation() {

    const location = useLocation();

    const styles= {
        activeLink: {
            fontSize: '35px',
            backgroundColor: '#ECC94A',
            borderRadius:'10px',
            boxShadow:'md',
            borderColor:'black',
            borderWidth: '1px',
            paddingLeft: '20px',
            paddingRight: '20px'
                        
        },
        inactiveLink: {
            textDecoration: 'none',
            fontSize: '30px',
        },
    }

    return (
        <div >
            <Stack 
                spacing={4}  
                align='center' 
                mt={4} 
                flexDirection={{ base: 'column', md: 'row' }} 
            >

                <Box 
                    as={NavLink} 
                    to='/' 
                    x={4} 
                    style={location.pathname === '/' ? styles.activeLink : styles.inactiveLink}
                    > 
                    About 
                </Box>

                <Box 
                    as={NavLink} 
                    to='/portfolio' 
                    mx={4} 
                    style={location.pathname === '/portfolio' ? styles.activeLink : styles.inactiveLink}
                    >
                    Portfolio
                </Box>

                <Box 
                    as={NavLink} 
                    to='/resume' 
                    mx={4} 
                    style={location.pathname === '/resume' ? styles.activeLink : styles.inactiveLink}
                    >
                    Resume
                </Box>

                <Box 
                    as={NavLink} 
                    to='/contact' 
                    mx={4} 
                    style={location.pathname === '/contact' ? styles.activeLink : styles.inactiveLink}
                    >
                    Contact
                </Box>
                
            </Stack>
        </div>
    );
};