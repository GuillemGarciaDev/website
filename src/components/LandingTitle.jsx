import React from 'react'
import {Container, Heading, VStack} from '@chakra-ui/react'


const LandingTitle = (props) => {

    return (
        <VStack marginTop={['3rem', '3rem','6rem', '6rem']}marginBottom='2rem'>
            <Heading 
                fontSize={['4rem', '6rem','6rem', '6rem']}
                fontWeight='600'  
                color='secondaryVariant.100'
                align='center'
                >
                Meet the...
            </Heading>
            
        </VStack>
    )
}

export default LandingTitle