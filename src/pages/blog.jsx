import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import PostPreview from '../components/PostPreview'
import Link from 'next/link'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Box, Text, Container, List, ListItem, Heading} from '@chakra-ui/react'
import AnimatedPage from '../components/AnimatedPage'

const Blog = ( { posts } ) => {

    return (
        <Box>
            <NavBar/>
            <AnimatedPage>
            <Container maxW='container.lg'>
                <Heading 
                    align='center'
                    margin={['3rem 0rem', '3rem 0rem','7rem 0rem','7rem 0rem']}
                    fontSize='3rem'
                    fontWeight='500'
                >
                    El Blog.
                </Heading>
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
                    )) : <Text as='h5' fontSize='2rem' color='#9A9483' align='center'>¡Oh! Parece que todavía no hay publicaciones en esta página...</Text>}
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