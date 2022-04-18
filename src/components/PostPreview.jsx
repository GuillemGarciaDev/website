import React from 'react'
import { Box, Text, Flex, Image, Heading} from '@chakra-ui/react'

const PostPreview = ( {title, date, time, img}) => {

    return (
        <Flex
            flexDirection='row'
            justifyContent='left'
        >
            <Image margin='0rem 1rem' borderRadius='15px' boxSize='80px' src={img} alt='' />
            <Flex
                flexDirection='column'
                alignItems='left'
                justifyContent='center'
            >
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.75rem'
                >
                    {date}
                </Text>
                <Heading
                    fontSize='1.5rem'
                    fontWeight='500'
                    _hover={{
                        color: 'secondary.100'
                    }}
                >
                    {title}
                </Heading>
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.75rem'
                >
                    {time} min read
                </Text>
            </Flex>
        </Flex>
    )

}

export default PostPreview