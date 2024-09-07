import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, Text, SimpleGrid } from '@chakra-ui/react';




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
                title: "Message sent!",
                description: "I've received your message and will get back to you shortly!",
                status: "success",
                duration: 5000,
                isClosable: true,
             });
        };


    return (
        <SimpleGrid columns={{ base: 1, md: 2 }}> 
        {/* Contact Form Box */} 
        <Box m={7} p={4} borderWidth={1} borderRadius="md" boxShadow="md" borderColor='black' > 
           <Text fontSize='2xl' mb={4}>
            Send Me A Message
           </Text>
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
            borderColor='black'
            boxShadow='md'
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
            borderColor='black'
            boxShadow='md'
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
            borderColor='black'
            boxShadow='md'
          />
        </FormControl>
        
        <Button
            onClick={handleSubmit}
          colorScheme="yellow"
          type="submit"
          boxShadow="md"
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
        borderRadius="md"
        boxShadow="md"
        borderColor='black'
        >
          
            <Text fontSize='2xl' mb={4}>Contact Info</Text>
        <Box border='1px' borderRadius='md' boxShadow='md' p={6}> 
            <Text mb={2}><strong>Email:</strong> epapanikolas@hotmail.com</Text>
            <Text mb={2}><strong>Phone:</strong> 435 229 2627</Text>
        </Box>     
    </Box>
    </SimpleGrid>
    );
};


