import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Imports `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Imports the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </StrictMode>,
)
