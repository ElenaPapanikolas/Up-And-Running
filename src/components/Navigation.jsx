import { Link } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';



export default function Navigation() {

    return (
        <div >
            <Stack spacing={4} direction='row' align='center'>

                <Link to="/" >
                    About Me 
                </Link>

                <Link to="/contact" >
                    Contact
                </Link>

                <Link to="/portfolio" >
                    Portfolio
                </Link>

                <Link to="/resume" >
                    Resume
                </Link>

            </Stack>
        </div>
    );
}