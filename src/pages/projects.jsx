import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Box, Container, Text, List, ListItem, Heading} from '@chakra-ui/react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import ProjectPreview from '../components/ProjectPreview'
import Link from 'next/link'
import AnimatedPage from '../components/AnimatedPage'

const Projects = ( { projects } ) => {

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
                        Los Proyectos.
                    </Heading>
                    <List margin={['2rem 2rem', '2rem 2rem','5rem 10rem', '5rem 10rem', '5rem 10rem']}  spacing={8}>
                        {projects.length > 0 ? projects.map( (project) => (
                            <ProjectPreview 
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                page={project.slug}
                            />
                        )) : <Text as='h5' fontSize='2rem' color='#9A9483' align='center'>¡Oh! Parece que todavía no hay publicaciones en esta página...</Text>}
                    </List>
                </Container>
            </AnimatedPage>
            <Footer/>
        </Box>
    )
}

export default Projects


export async function getStaticProps () {
    const projects = getAllFilesMetadata('projects')
    return {
        props: {
            projects
        }
    }
}