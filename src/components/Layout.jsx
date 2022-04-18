import {Box, Container} from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import TRadLine from './TRadLine'
import BRadLine from './BRadLine'

const Layout = ({children}) => {

    return (
        <Box>
            <Head>
                <meta charset="utf-8"/>
                <meta name="description" content="Reading, Thinking, Writing and Acting." />
                <meta name="author" content="Guillem Garcia"/>
                <meta name="keywords" content="Software Developer, Junior Software Developer, React, Next, Node, SQL, MongoDB, Databases, Architecture, Agile, Writing, Reading, Books, Thinking, Philosophy"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta rel="canonical" href="https://guillemgarcia.dev"/>
                <link href="public/fonts/Montserrat/Montserrat-Regular.ttf" rel="stylesheet"/>
                <title>Guillem Garcia</title>
            </Head>
            <Box minH='100vh'  backgroundColor='primaryVariant.100'>
                <Box 
                    display={['none', 'none', 'block', 'block']}
                    position='absolute'
                    top='-9rem'
                    left='-9rem'
                >
                    <TRadLine />
                </Box>
                    {children}
                <Box 
                    display={['none', 'none', 'block', 'block']}
                    position='absolute'
                    bottom='0rem'
                    right='0rem'
                >
                    <BRadLine/>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout