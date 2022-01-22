import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Box, Container, Text, List, ListItem} from '@chakra-ui/react'
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
                    <Text 
                        align='center'
                        margin='7rem 0rem'
                        fontSize='3rem'
                        fontWeight='500'
                    >
                        The Projects.
                    </Text>
                    <List margin='5rem 10rem' spacing={8}>
                        {projects.map( (project) => (
                            <ProjectPreview 
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                page={project.slug}
                            />
                        ))}
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