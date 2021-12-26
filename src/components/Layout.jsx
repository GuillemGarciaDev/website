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
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                <title>Guillem Garcia</title>
            </Head>
            {children}
        </Box>
    )
}

export default Layout