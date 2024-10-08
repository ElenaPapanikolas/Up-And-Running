import PropTypes from 'prop-types';
import { Box, Image, Text, Stack, IconButton, Tooltip } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { PiBrowsersBold } from "react-icons/pi";
import { motion } from 'framer-motion';

export default function Project({ title, description, image, github, deployed }) {

    const styles= {
        Thumbnail: {
            height: '350px',
            width: '350px',
        },
    };
   
    return (
        <Box borderWidth='1px' borderRadius='md' overflow='hidden' p={4} boxShadow='md' borderColor='black'>

            <Box display='flex' justifyContent='center'>
                <Image src={image} alt={title}  objectFit='cover' style={styles.Thumbnail} borderRadius='md' />
            </Box>

            <Stack spacing={3} mt={4}>
                <Text fontSize='xl' fontWeight='bold'>{title}</Text>
                <Text>{description}</Text>
            </Stack>

            <Stack spacing={2} align='center'>

                <Stack direction='row' spacing={2}> 

                    <Tooltip label='GitHub Repository' aria-label='GitHub Repository Tooltip'>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <IconButton 
                                as='a'
                                href={github}
                                aria-label='Link to GitHub repository'
                                icon={<FaGithub />}
                                colorScheme='yellow'
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        </motion.div>
                    </Tooltip>
                    
                    <Tooltip label='Deployed Application' aria-label='Deployed Application Tooltip'>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <IconButton 
                                as='a'
                                href={deployed}
                                aria-label='Link to deployed application'
                                icon={<PiBrowsersBold />}
                                colorScheme='yellow'
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        </motion.div>
                    </Tooltip>

                </Stack>

            </Stack>

        </Box>
    );
};

// Defining prop types for the Project component
Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    deployed: PropTypes.string.isRequired,
};