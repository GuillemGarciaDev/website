import React from 'react'
import {Box,Text} from '@chakra-ui/react'


const Footer = (props) => {
    
    return (
        <Box 
            display='flex'
            position='relative'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
			<Text
                color='secondary.100'
                fontFamily='Montserrat'
                fontWeight='500'
                padding='3rem 0rem' 
            >
                @ {new Date().getFullYear().toString()} GuillemGarciaDev. All rights reserved
            </Text>
        </Box>
            
    )

}

export default Footer