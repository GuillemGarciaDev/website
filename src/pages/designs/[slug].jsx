import React from 'react'
import {getFileBySlug, getFiles} from '../../../lib/mdx'
import {MDXRemote} from 'next-mdx-remote'
import NavBar from '../../components/Navbar'
import {Box, Container, Flex} from '@chakra-ui/react'
import CustomButton from '../../components/CustomButton'
import MDXComponents from '../../components/MDXComponents'
import Footer from '../../components/Footer'
import AnimatedPage from '../../components/AnimatedPage'
const Design = ( {source, frontmatter}) => {

    return (
        <Box>
            <NavBar/>
                <AnimatedPage>
                <Container maxW='container.md'>
                    <MDXRemote {...source} components={MDXComponents}/>
                    <Flex
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <CustomButton
                            text='GO BACK'
                            size='md'
                            page='/designs'
                            width='6.25rem'
                        />
                    </Flex>
                </Container>
                </AnimatedPage>
            <Footer/>
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