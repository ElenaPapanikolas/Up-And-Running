import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './Routing.jsx';
// Importing `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Importing the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import './index.css'

// Overrides Chakra default theme
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'white' ,
        color: 'var(--black)',
        fontFamily: 'Audiowide',
        fontSize: '20px',
      },
    },
  },
  components: {
    Button: {
      // Defines styles for different color schemes
      variants: {
        solid: {
          _hover: {
            bg: 'yellow.400', // Sets the hover background color
            color: 'white', // Changes the text color on hover
          },
        },
      },
    },
  },  
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} bg/>
    </ChakraProvider>
  </StrictMode>,
)
