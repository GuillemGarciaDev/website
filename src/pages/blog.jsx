import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import PostPreview from '../components/PostPreview'
import Link from 'next/link'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Box, Text, Container, List, ListItem} from '@chakra-ui/react'
import AnimatedPage from '../components/AnimatedPage'

const Blog = ( { posts } ) => {

    return (
        <Box>
            <NavBar/>
            <AnimatedPage>
            <Container maxW='container.lg'>
                <Text 
                    align='center'
                    margin={['3rem 0rem', '3rem 0rem','7rem 0rem','7rem 0rem']}
                    fontSize='3rem'
                    fontWeight='500'
                >
                    The Blog.
                </Text>
                <List margin={['2rem 2rem', '2rem 2rem','5rem 10rem', '5rem 10rem']} spacing={8}>
                    {posts.length > 0 ? posts.map( (post) => (
                        <ListItem>
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <a>
                                    <PostPreview 
                                        title={post.title}
                                        date={post.date}
                                        time={post.time}
                                        img={post.img}
                                    />
                                </a>
                            </Link>
                        </ListItem>
                    )) : <Text as='h5' fontSize='2rem' color='#9A9483' align='center'>Oh! Seems like there are no posts on this page yet...</Text>}
                </List>
            </Container>
            </AnimatedPage>
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