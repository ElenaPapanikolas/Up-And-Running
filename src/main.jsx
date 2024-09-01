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
        //background image
        backgroundImage: 'url("./images/technology.jpg")',
        backgroundColor: 'black' ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100%',
        margin: 0,

        // Font styles
        // fontFamily: '',
        // fontSize: '18px',
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
