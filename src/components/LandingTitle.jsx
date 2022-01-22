import React from 'react'
import {Container, Text, VStack} from '@chakra-ui/react'


const LandingTitle = (props) => {

    return (
        <VStack marginTop='6rem' marginBottom='2rem'>
            <Text 
                fontSize='6rem' 
                fontWeight='600'  
                color='secondaryVariant.100'
                align='center'
                >
                Meet the...
            </Text>
            
        </VStack>
    )
}

export default LandingTitle