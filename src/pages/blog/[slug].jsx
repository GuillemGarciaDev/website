import React from 'react'
import {getFileBySlug, getFiles} from '../../../lib/mdx'
import {MDXRemote} from 'next-mdx-remote'
import NavBar from '../../components/Navbar'
import {Box, Container, Button, Flex} from '@chakra-ui/react'
import CustomButton from '../../components/CustomButton'
import MDXComponents from '../../components/MDXComponents'
import Footer from '../../components/Footer'

const Post = ( { source, frontmatter } ) => {

    return (
        <Box>
            <NavBar/>
            <Container maxW='container.md'>
                <Box padding='4rem 0rem'>
                    <MDXRemote {...source} components={MDXComponents}/>
                </Box>
                
                <Flex
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                >
                    <CustomButton
                        text='GO BACK'
                        size='md'
                        page='/blog'
                        width='6.25rem'
                    />
                </Flex>
            </Container>
            <Footer/>
        </Box>
    )

}


export async function getStaticProps( {params} ) {

    const { source, frontmatter} = await getFileBySlug('posts' , params.slug)

    return {
        props: {source, frontmatter}
    }
}

export async function getStaticPaths() {
    const posts = await getFiles('posts')
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths, fallback: false,
    }
}

export default Post

