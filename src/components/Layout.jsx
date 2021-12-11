import {Box, Container} from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'


const Layout = ({children}) => {

    return (
        <Box>
            <Head>
                <meta charset="utf-8"/>
                <meta name="description" content="The coding globetrotter - Guillem Garcia. Welcome to my presentation. It doesn't matter who I am, it matters what I am capable of doing. Enter to discover what you've never seen before." />
                <meta name="author" content="Guillem Garcia"/>
                <meta name="keywords" content="Software Developer, Junior Software Developer, React, Next, Node, SQL, MongoDB, Databases, Architecture, Agile"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta rel="canonical" href="https://guillemgarcia.dev"/>
                <title>Guillem Garcia</title>
            </Head>
            {children}
        </Box>
    )
}

export default Layout