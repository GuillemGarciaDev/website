import React from 'react'
import {Container, Heading, Box, Flex} from '@chakra-ui/react'

const Custom404 = () => {

    return (
        <Container maxW='lg'>
            <Box h='100vh' display='flex'>
               <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                    <Heading align='center' as='h2' size='xl' color='secondary.100'>
                        Ups...
                    </Heading>
                    <Heading align='center' as='h1' size='xl'>
                        Sorry, we can't find what you are looking for.
                    </Heading>
               </Flex>
            </Box>
                
            
            
        </Container>
    )
}

export default Custom404;