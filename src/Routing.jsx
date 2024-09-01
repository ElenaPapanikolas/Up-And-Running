import { createBrowserRouter } from 'react-router-dom';

// Imports all page components
import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Sets up routing paths
const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />,
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