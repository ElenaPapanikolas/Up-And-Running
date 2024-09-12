import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import Project from '../components/Project'

// Importing all images
import stocknessmonster from '../assets/images/stocknessmonster.png';
import techtide from '../assets/images/techtide.png';
import readmegenerator from '../assets/images/readmegenerator.png';
import weatherdasher from '../assets/images/weatherdasher.png';
import whatsfordinner from '../assets/images/whatsfordinner.png';
import firstportfolio from '../assets/images/firstportfolio.png';

export default function Portfolio() {

    const styles= {
        Heading: {
            fontFamily: 'Creepster',
        },
    }

    const projects = [
        { 
            title: 'Stock-ness Monster', 
            description: 'A robust inventory management application following the MVC paradigm using Handlebars.js, Express.js, and Sequelize to connect to a PostgreSQL database.', 
            image: stocknessmonster,
            github: 'https://github.com/ElenaPapanikolas/stock-ness-monster',
            deployed: 'https://stock-ness-monster-production.up.railway.app/login', 
        },
        { 
            title: 'Tech-Tide', 
            description: 'A blog following the MVC paradigm using Handlebars.js, Express.js, and Sequelize to connect to a PostgreSQL database.', 
            image: techtide,
            github: 'https://github.com/ElenaPapanikolas/Tech-Tide',
            deployed: 'https://tech-tide.onrender.com/', 
        },
        { 
            title: 'README-Generator', 
            description: 'A command-line application using Node.js to generate a professional README.', 
            image: readmegenerator,
            github: 'https://github.com/ElenaPapanikolas/README-Generator',
            deployed: 'https://drive.google.com/file/d/1kUDQELRHZUgQ4KMGC3K0qn4dGrdMX41D/view', 
        },
        { 
            title: 'Weather-Dasher', 
            description: 'A frontend weather dashboard using a server-side API.', 
            image: weatherdasher,
            github: 'https://github.com/ElenaPapanikolas/Weather-Dasher',
            deployed: 'https://elenapapanikolas.github.io/Weather-Dasher/', 
        },
        { 
            title: `What's For Dinner`, 
            description: 'A frontend meal and drink decider made with two server-side APIs.', 
            image: whatsfordinner,
            github: 'https://github.com/ElenaPapanikolas/whats-for-dinner',
            deployed: 'https://lindsay-terry.github.io/whats-for-dinner/', 
        },
        { 
            title: 'My First Portfolio', 
            description: 'My first portfolio made exclusively with HTML and CSS.', 
            image: firstportfolio,
            github: 'https://github.com/ElenaPapanikolas/Elena-Papanikolas-Portfolio',
            deployed: 'https://elenapapanikolas.github.io/Elena-Papanikolas-Portfolio/', 
        },
    ];

    return (
        <Box>

            <Box m={4} display='flex' justifyContent='center'>
                <Heading style= {styles.Heading}>
                    Check Out What I&apos;ve Been Up To
                </Heading>
            </Box>

            <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            github={project.github}
                            deployed={project.deployed}
                        />
                    ))}
                </SimpleGrid>
            </Box>
            
        </Box>    
    );
};