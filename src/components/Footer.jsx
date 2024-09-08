import { Box, Container, Text, Stack, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {

    return (
        <div>
            <Box as='footer'
                bg={useColorModeValue('gray.100', 'gray.900')}
                color={useColorModeValue('gray.600', 'gray.400')}
                py={4}
                mt={8}>

                <Container maxW='container.xl'>
                    <Stack spacing={2} align='center'>
                        <Stack direction='row' spacing={2}>
                            {/* GitHub, LinkedIn, and Hackerrank Icon Buttons  */}
                            <motion.div whileHover={{ scale: 1.3 }}>
                            <IconButton
                                as='a'
                                href='https://github.com/ElenaPapanikolas'
                                aria-label='GitHub'
                                icon={<FaGithub />}
                                colorScheme='yellow'
                                target='_blank'
                                rel='noopener noreferrer'     
                            />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.3 }}>
                            <IconButton
                                as='a'
                                href='https://www.linkedin.com/in/elena-papanikolas-98b8b2324/'
                                aria-label='LinkedIn'
                                icon={<FaLinkedin />}
                                colorScheme='yellow'
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.3 }}>
                            <IconButton
                                as='a'
                                href='https://www.hackerrank.com/profile/epapanikolas'
                                aria-label='Hackerrank'
                                icon={<FaHackerrank />}
                                colorScheme='yellow'
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                            </motion.div>
                        </Stack>
                        {/* Dynamically inserts the current year */}
                        <Text>&copy; {new Date().getFullYear()} ESP</Text> 
                    </Stack>
                </Container>

            </Box>
        </div>
    )
};