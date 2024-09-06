import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';




export default function Contact() {

    
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });
    
        const toast = useToast();
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log(formData);

            setFormData({ name: '', email: '', message: '' });
            toast({
                title: "Message sent.",
                description: "I've received your message and will get back to you shortly.",
                status: "success",
                duration: 5000,
                isClosable: true,
             });

        


    };


    return (
        <Box maxW="lg" mx="auto" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <form >
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={6}
          />
        </FormControl>

        <Button
            onClick={handleSubmit}
          colorScheme="cyan"
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </Box>
    );
};


