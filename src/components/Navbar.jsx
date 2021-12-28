import React from 'react'
import Link from 'next/link'
import {Flex, Text} from '@chakra-ui/react'

const pages = [
    {name: 'HOME', page: '/'},
    {name: 'ABOUT', page: '/about'},
    {name: 'BLOG', page: '/blog/'},
    {name: 'DESIGNS', page: '/designs'},
    {name: 'PROJECTS', page: '/projects'}
]

const NavBar = () => {

    return (
        <Flex flexDirection='row' alignItems='center' justifyContent='center' backgroundColor='secondary.100'>
            {pages.map(el => 
            <Link href={el.page}>
                <Text 
                    color='primaryVariant.100'
                    fontFamily='Montserrat'
                    fontWeight='300'
                    margin='0rem 2rem'
                    padding='0.75rem 0rem'
                    _hover={{
                        fontWeight: '700',
                        cursor: 'pointer'
                    }}
                >
                    {el.name}
                </Text>
                
            </Link> 
            )}
        </Flex>
    )

}

export default NavBar