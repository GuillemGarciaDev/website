import React from 'react'
import {getFileBySlug, getFiles} from '../../../lib/mdx'
import {MDXRemote} from 'next-mdx-remote'
import NavBar from '../../components/Navbar'
import {Box, Container, Button} from '@chakra-ui/react'

const Post = ( { source, frontmatter } ) => {

    console.log(source);

    return (
        <Box>
            <NavBar/>
            <Container maxW='container.md'>
                <MDXRemote {...source}/>
            </Container>
        </Box>
    )

}


export async function getStaticProps( {params} ) {

    const { source, frontmatter} = await getFileBySlug(params.slug)

    return {
        props: {source, frontmatter}
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
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

