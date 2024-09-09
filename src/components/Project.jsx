import PropTypes from 'prop-types';
import { Box, Image, Text, Stack, IconButton } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { PiBrowsersBold } from "react-icons/pi";
import { motion } from 'framer-motion';


export default function Project({ title, description, image, github, deployed }) {

    const styles= {
        Thumbnail: {
            height: '350px',
        },
    }
   
    return (
        <Box borderWidth='1px' borderRadius='md' overflow='hidden' p={4} boxShadow='md' borderColor='black'>
            <Image src={image} alt={title}  objectFit='cover' style={styles.Thumbnail}/>
            <Stack spacing={3} mt={4}>
                <Text fontSize='xl' fontWeight='bold'>{title}</Text>
                <Text>{description}</Text>
            </Stack>
            <Stack spacing={2} align='center'>
                <Stack direction='row' spacing={2}> 
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