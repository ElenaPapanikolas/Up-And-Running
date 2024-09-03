import Navigation from './Navigation';
import { Container } from '@chakra-ui/react'


export default function Header() {

    const styles = {
        Header: {
            fontFamily: 'Creepster',
            fontSize: '40px', 
            color: 'var(--space-cadet)'
        }
    }
   
    return (
        <Container style= {styles.Header} centerContent >
            <Navigation/>
        </Container>
    );
}