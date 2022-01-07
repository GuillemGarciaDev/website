import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Flex, Text, Image, Button} from '@chakra-ui/react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const ProjectPreview = ( {title, description, image, page, github} ) => {

    return (
        <Flex
            flexDirection='row'
        >
            <Image margin='0rem 1rem' src={image} boxSize='180px' borderRadius='15px'/>
            <Flex
                flexDirection='column'
                justifyContent='flex-start'
                alignItems='left'
            >
                <Link href={`/projects/${page}`}>
                    <a>
                        <Text fontSize='2.125rem'>
                            {title}
                        </Text>
                    </a>
                </Link>
                        
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.875rem'
                >
                    {description}
                </Text>
                <a href={github} target='_blank'>
                    <Button
                        fontFamily='Montserrat'
                        backgroundColor='secondaryVariant.100'
                        color='white'
                        leftIcon={<FaGithub />}
                        _hover={{

                        }}
                        marginTop='1rem'
                    >
                        GITHUB
                    </Button>
                </a>
            </Flex>
        </Flex>
    )
}


export default ProjectPreview