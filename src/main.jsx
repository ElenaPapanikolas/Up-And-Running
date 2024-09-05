import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './Routing.jsx';
// Imports `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Imports the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import './index.css'

// Override Chakra default theme
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
  
        backgroundColor: 'white' ,
        color: 'var(--black)',

        // Font styles
        fontFamily: 'Audiowide',
        fontSize: '20px',
        
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
