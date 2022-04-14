import React from 'react'
import {Flex, Text} from '@chakra-ui/react'

const Sidebar = () => {

    return (
        <Flex flexDirection='column'>
            <Text fontWeight='bold' fontSize='3rem' color='background.100'>
                Social Media
            </Text>
            <Text rotate='90'>
                Instagram
            </Text>
            <Text>
                LinkedIn
            </Text>
            <Text>
                Twitter
            </Text>
        </Flex>
    )
}

export default Sidebar
