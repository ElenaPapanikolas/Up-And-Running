import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, Text, SimpleGrid, FormErrorMessage } from '@chakra-ui/react';

export default function Contact() {

    // State to hold form data for name, email, and message
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to hold form validation errors for each field
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    // Hook to provide toast notifications
    const toast = useToast();
    
    // Function to update form data state on input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to validate an email address
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email); 
    };

    // Function to validate individual form fields based on their name and value
    const validateField = (name, value) => {
        if (name === 'name' && !value) {
            return 'Name is required.';
        }
        if (name === 'email' && !validateEmail(value)) {
            return 'A valid email is required.';
        }
        if (name === 'message' && !value) {
            return 'Message is required.'
        }
        return ''; // No error if the field is valid
    };

    // Function to handle blur event on form fields, validating the field when it loses focus
    const handleBlur = (event) => {
        const { name, value } = event.target;
        const error = validateField(name, value); // Validates the field
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error, // Updates error state for the specific field
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = formData;

    // Checks for errors in the form data
    const errors = {
        name: !name,
        email: !email || !validateEmail(email),
        message: !message,
    };

    // If there are any errors, updates the formErrors state and shows a toast error
    if (Object.values(errors).includes(true)) {
        setFormErrors({
            name: errors.name ? 'Name is required.' : '',
            email: errors.email ? 'A valid email is required.' : '',
            message: errors.message ? 'Message is required.' : '',
        });
        toast({
            title: 'Error!',
            description: 'Please fill out all fields correctly before submitting.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
        return; // Exits early to prevent form submission
    }

    // Resets form errors if no errors
    setFormErrors({
        name: false,
        email: false,
        message: false,
    });

    // Logs form data to console. Submission logic will go here at a later date
    console.log(formData); 

    // Resets form data after successful submission
    setFormData({ name: '', email: '', message: '' });

    // Shows success toast notification
    toast({
        title: 'Message sent!',
        description: `I've received your message and will get back to you shortly!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        });
    };


    return (
        <SimpleGrid columns={{ base: 1, md: 2 }}> 

            <Box m={7} p={4} borderWidth={1} borderRadius='md' boxShadow='md' borderColor='black' > 
                <Box display='flex' justifyContent='center'>
                    <Text fontSize='4xl' fontFamily='Creepster' mb={4}>
                        Send Me A Message
                    </Text>
                </Box>
                {/* Contact Form */}    
                <form >
                <FormControl mb={4} isRequired isInvalid={!!formErrors.name}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input
                        id='name'
                        name='name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your name here...'
                        borderColor='black'
                        boxShadow='md'
                    />
                    {/* Displays error message if there's an error for the name field */}
                    {formErrors.name && <FormErrorMessage>{formErrors.name}</FormErrorMessage>}
                </FormControl>

                <FormControl mb={4} isRequired isInvalid={!!formErrors.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your.Email@example.com'
                        borderColor='black'
                        boxShadow='md'
                    />
                    {/* Displays error message if there's an error for the email field */}
                    {formErrors.email && <FormErrorMessage>{formErrors.email}</FormErrorMessage>}
                </FormControl>

                <FormControl mb={4} isRequired isInvalid={!!formErrors.message}>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your message here...'
                        rows={6}
                        borderColor='black'
                        boxShadow='md'
                    />
                    {/* Displays error message if there's an error for the message field */}
                    {formErrors.message && <FormErrorMessage>{formErrors.message}</FormErrorMessage>}
                </FormControl>
                
                <Button
                    onClick={handleSubmit}
                    colorScheme='yellow'
                    type='submit'
                    boxShadow='md'
                >
                    Send Message
                </Button>
                </form>
        </Box>

    {/* Contact Info Box */}
        <Box
            m={7}
            p={4}
            borderWidth={1}
            borderRadius='md'
            boxShadow='md'
            borderColor='black'
        >
            <Box display='flex' justifyContent='center'>
                <Text fontSize='4xl' fontFamily='Creepster' mb={4}>Contact Info</Text>
            </Box>
            <Box border='1px' borderRadius='md' boxShadow='md' p={6}> 
                <Text mb={2}><strong>Email:</strong> epapanikolas@hotmail.com</Text>
                <Text mb={2}><strong>Phone:</strong> 435 229 2627</Text>
            </Box>     
        </Box>
    </SimpleGrid>
    );
};


