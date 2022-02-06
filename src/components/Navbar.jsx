import React from 'react'
import Link from 'next/link'
import {Flex, Text, IconButton} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

const pages = [
    {name: 'HOME', page: '/'},
    {name: 'ABOUT', page: '/about'},
    {name: 'BLOG', page: '/blog'},
    {name: 'DESIGNS', page: '/designs'},
    {name: 'PROJECTS', page: '/projects'}
]

const NavBar = () => {

    const [showMenu, setShowMenu] = React.useState('none')

    return (
        <>
            <Flex
                flexDirection='row'
                alignItems='center'
                justifyContent={['flex-end', 'flex-end', 'center', 'center']}
                backgroundColor='secondary.100'
                position='relative'
                zIndex={3}
            >
                <Flex display={['none', 'none', 'flex', 'flex']}  flexDirection='row' alignItems='center' justifyContent='center'>
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
                <IconButton 
                    m={2}
                    mr={8}
                    display={['flex', 'flex', 'none', 'none']}
                    icon={<GiHamburgerMenu />}
                    size='lg'
                    aria-label='Open menu'
                    backgroundColor='secondary.100'
                    color='primaryVariant.100'
                    _hover={{
                        backgroundColor: 'primaryVariant.100',
                        color: 'secondary.100'
                    }}
                    _focus={{
                        border: 'none'
                    }}
                    onClick={() => setShowMenu('flex')}
                />
            </Flex>
            <Flex
                w='100vw'
                h='100vh'
                backgroundColor='primaryVariant.100'
                position='fixed'
                zIndex={20}
                top='0'
                left='0'
                flexDirection='column'
                overflowY='auto'
                display={showMenu}
            >
                <Flex  justifyContent='flex-end' >
                    <IconButton 
                        m={2}
                        mr={8}
                        aria-label='close menu'
                        size='lg'
                        icon={<GrClose />}
                        onClick={() => setShowMenu('none')}
                        backgroundColor='primaryVariant.100'
                        color='secondary.100'
                        _hover={{
                            backgroundColor: 'secondary.100',
                            color: 'primaryVariant.100'                            
                        }}
                    />
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                >
                    {pages.map(el => 
                        <Link href={el.page}>
                            <Text 
                                color='secondary.100'
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
            </Flex>
        </>
            
    )

}

export default NavBar