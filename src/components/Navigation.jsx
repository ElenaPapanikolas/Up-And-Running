import { Link } from 'react-router-dom';
import { Stack, Box} from '@chakra-ui/react';

export default function Navigation() {
    return (
        <div >
            <Stack spacing={4} direction='row' align='center' mt={4} >
                <Box as={Link} to='/' mx={4}>
                    About 
                </Box>

                <Box as={Link} to='/contact' mx={4}>
                    Contact
                </Box>

                <Box as={Link} to='/portfolio' mx={4}>
                    Portfolio
                </Box>

                <Box as={Link} to='/resume' mx={4}>
                    Resume
                </Box>
            </Stack>
        </div>
    );
};