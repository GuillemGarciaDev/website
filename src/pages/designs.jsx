import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx'
import NavBar from '../components/Navbar'
import {Box, Container, Text, List, ListItem} from '@chakra-ui/react'
import  Link from 'next/link'
import DesignPreview from '../components/DesignPreview'
import Footer from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'

const Designs = ( {designs} ) => {

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
                    The Designs.
                </Text>
                <List margin='5rem 10rem' spacing={8}>
                    {designs.map((design) => (
                        <ListItem>
                            <Link href={design.slug} href={`/designs/${design.slug}`}>
                                <a>
                                    <DesignPreview 
                                        title={design.title}
                                        description={design.description}
                                        image={design.image}
                                    />
                                </a>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Container>
            </AnimatedPage>
            <Footer/>
        </Box>
    )
}

export default Designs

export async function getStaticProps () {

    const designs = await getAllFilesMetadata('designs')
    return {
        props: {
            designs
        }
    }
}