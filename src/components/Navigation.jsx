import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';



export default function Navigation() {

    return (
        <div >
            <Link to="/" >
                    <Button>
                        About Me 
                    </Button>
            </Link>

            <Link to="/contact" >
                    <Button>
                        Contact
                    </Button>
            </Link>

            <Link to="/portfolio" >
                    <Button>
                        Portfolio
                    </Button>
            </Link>

            <Link to="/resume" >
                    <Button>
                        Resume
                    </Button>
            </Link>
        </div>
    );
}