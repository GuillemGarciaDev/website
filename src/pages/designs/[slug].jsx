import React from 'react'
import {getFileBySlug, getFiles} from '../../../lib/mdx'
import {MDXRemote} from 'next-mdx-remote'
import NavBar from '../../components/Navbar'
import {Box, Container, Flex} from '@chakra-ui/react'
import CustomButton from '../../components/CustomButton'

const Design = ( {source, frontmatter}) => {

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
                        page='/blog'
                        width='6.25rem'
                    />
                </Flex>
            </Container>
        </Box>
    )
}


export async function getStaticProps( {params} ) {

    const { source, frontmatter} = await getFileBySlug('designs' , params.slug)

    return {
        props: {source, frontmatter}
    }
}

export async function getStaticPaths() {
    const designs = await getFiles('designs')
    const paths = designs.map((design) => ({
        params: {
            slug: design.replace(/\.mdx/, '')
        }
    }))

    return {
        paths, fallback: false,
    }
}


export default Design