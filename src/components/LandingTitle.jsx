import React from 'react'
import {Container, Text, VStack} from '@chakra-ui/react'


const LandingTitle = (props) => {

    return (
        <Container maxW='container.lg'> 
            <VStack>
                <Text 
                    fontSize='6rem' 
                    fontWeight='300'  
                    color='secondaryVariant.100'
                    marginTop='12.5rem'
                >
                    Welcome
                </Text>
                <Text 
                    fontSize='3rem' 
                    fontWeight='400'
                    color='secondaryVariant.100'
                    marginBottom='12.5rem'
                >
                    Are you looking for something?
                </Text>
            </VStack>
            
        </Container>
    )
}

export default LandingTitle