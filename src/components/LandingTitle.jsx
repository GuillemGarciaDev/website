import React from 'react'
import {Container, Text, VStack} from '@chakra-ui/react'


const LandingTitle = (props) => {

    return (
        <VStack marginTop='12.5rem' marginBottom='12.5rem'>
            <Text 
                fontSize='6rem' 
                fontWeight='300'  
                color='secondaryVariant.100'
                >
                Welcome
            </Text>
            <Text 
                fontSize='3rem' 
                fontWeight='400'
                color='secondaryVariant.100'
            >
                Are you looking for something?
            </Text>
        </VStack>
    )
}

export default LandingTitle