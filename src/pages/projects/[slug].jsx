import React from 'react'
import { getFileBySlug, getFiles } from '../../../lib/mdx'
import NavBar from '../../components/Navbar'
import { MDXRemote } from 'next-mdx-remote'
import {Box, Container, Flex} from '@chakra-ui/react'
import CustomButton from '../../components/CustomButton'


const Project = ( {source, frontmatter }) => {

    return (
        <Box>
            <NavBar/>
            <Container maxW='container.md'>
                <MDXRemote {...source}/>
                <Flex
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                >
                    <CustomButton
                        text='GO BACK'
                        size='md'
                        page='/projects'
                        width='6.25rem'
                    />
                </Flex>
            </Container>
        </Box>
    )
}

export default Project

export async function getStaticProps( {params} ) {

    const { source, frontmatter} = await getFileBySlug('projects' , params.slug)

    return {
        props: {source, frontmatter}
    }
}

export async function getStaticPaths() {
    const projects = await getFiles('projects')
    const paths = projects.map((project) => ({
        params: {
            slug: project.replace(/\.mdx/, '')
        }
    }))

    return {
        paths, fallback: false,
    }
}

