import React from 'react';
import {Button} from '@chakra-ui/react'

const CustomButton = ({text, size}) => {

    return (
        <Button
            variant='outline'
            backgroundColor='transparent'
            borderColor='secondary.100'
            fontFamily='Montserrat'
            color='secondary.100'
            marginTop='2rem'
            size={size}
        >
            {text}
        </Button>
    )
}

export default CustomButton