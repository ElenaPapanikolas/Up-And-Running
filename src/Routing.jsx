import { createBrowserRouter } from 'react-router-dom';

// Importing all page components
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Setting up routing paths
const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
        ],
    },
]);

export default router;