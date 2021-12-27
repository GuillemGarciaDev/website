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
            size='md'
            width='5rem'
            bottom='0'
            _hover={{
                color: 'white',
                backgroundColor: 'secondary.100'
            }}
            _active={{
                borderColor: 'secondary.100',
            }}
            _focus={{
                shadowColor: 'secondary.100'
            }}
        >
            {text}
        </Button>
    )
}

export default CustomButton