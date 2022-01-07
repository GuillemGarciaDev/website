import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import Link from 'next/link'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Box, Text, Container, List, ListItem} from '@chakra-ui/react'
import TRadLine from '../components/TRadLine'
import BRadLine from '../components/BRadLine'
import { motion } from 'framer-motion'



const Blog = ( { posts } ) => {

    return (
        <Box>
            <TRadLine/>
            <NavBar/>
            <Container maxW='container.lg'>
                <Text 
                    align='center'
                    margin='7rem 0rem'
                    fontSize='3rem'
                    fontWeight='500'
                >
                    The Blog.
                </Text>
                <List margin='5rem 10rem' spacing={8}>
                    {posts.map( (post) => (
                        <ListItem>
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <a>
                                    <Preview 
                                        title={post.title}
                                        date={post.date}
                                        time={post.time}
                                        img={post.img}
                                    />
                                </a>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Container>
            <BRadLine/>
            <Footer/>
        </Box>

    )

}

export default Blog

export async function getStaticProps() {
    const posts = await getAllFilesMetadata('posts')
    return {
        props: {
            posts
        }
    }
}