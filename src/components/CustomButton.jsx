import React from 'react';
import {Button} from '@chakra-ui/react'
import Link from 'next/link'
const CustomButton = ({text, size, page, width}) => {

    return (
        <Link href={page}>
            <Button
            variant='outline'
            backgroundColor='transparent'
            borderColor='secondary.100'
            fontFamily='Montserrat'
            color='secondary.100'
            size='md'
            width={width !== null ? width : '5rem'}
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
        </Link>
    )
}

export default CustomButton