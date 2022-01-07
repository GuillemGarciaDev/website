import React from 'react'
import  {Flex, Text, Image} from '@chakra-ui/react'


const DesignPreview = ({title, image, description}) => {

    return (
        <Flex
            flexDirection='row'
            alignItems='top'
        >
            <Image margin='0rem 1rem' src={image} boxSize='150px' borderRadius='15px'/>
            <Flex
                flexDirection='column'
                justifyContent='flex-start'
                alignItems='left'
            >
                <Text 
                    fontSize='2.125rem'
                    _hover={{
                        color: 'secondary.100'
                    }}
                >
                    {title}
                </Text>
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.875rem'
                >
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

export default DesignPreview