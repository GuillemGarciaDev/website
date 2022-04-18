import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Flex, Text, Image, Button, SimpleGrid, Heading} from '@chakra-ui/react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const ProjectPreview = ( {title, description, image, page, github} ) => {

    return (
        <SimpleGrid columns={[1,1,2,2,2]}>
            <Flex
                flexDirection='row'
                justifyContent={['center', 'center','flex-end','flex-end','flex-end']}
                
            >
                <Image margin={['1rem', '1rem','0rem 1rem', '0rem 1rem', '0rem 1rem']} src={image} boxSize='180px' borderRadius='15px'/>
            </Flex>
            
            <Flex
                flexDirection='column'
                justifyContent={['center','center','flex-start','flex-start','flex-start']}
                alignItems={['center','center','start','start','start']}
            >
                <Link href={`/projects/${page}`}>
                    <a>
                        <Heading 
                            fontSize='2.125rem'
                            fontWeight='500'
                            align={['center', 'center','left','left','left']}
                        >
                            {title}
                        </Heading>
                    </a>
                </Link>
                        
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.875rem'
                    align={['center','center','left','left','left']}
                    margin={['0rem 2rem', '0rem 6rem', '0rem', '0rem', '0rem']}
                >
                    {description}
                </Text>
                <a href={github} target='_blank'>
                    <Button
                        fontFamily='Montserrat'
                        backgroundColor='secondaryVariant.100'
                        color='white'
                        leftIcon={<FaGithub />}
                        _hover={{}}
                        marginTop='1rem'
                    >
                        GITHUB
                    </Button>
                </a>
            </Flex>
        </SimpleGrid>
    )
}


export default ProjectPreview