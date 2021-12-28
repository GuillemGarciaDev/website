import React from 'react'
import {Text} from '@chakra-ui/react'


const Footer = (props) => {
    
    return (
        <Text
            color='white'
            fontFamily='Montserrat'
            fontWeight='500'
            padding='3rem 0rem' 
        >
            @ {new Date().getFullYear().toString()} GuillemGarciaDev. All rights reserved
        </Text>
    )

}

export default Footer