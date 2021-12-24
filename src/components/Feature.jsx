import React from 'react'
import  {Button, VStack, Text, Box} from '@chakra-ui/react'

const Feature = ({title, hiragana, descr}) => {

    return (
        <Box flexDirection='column' maxW='400' maxH='400'>
            <Text
                alignSelf='left'
                fontSize='3.75rem'
                fontWeight='600'
            >
                {title}
            </Text>
            <Text
                alignSelf='right'
                fontSize='1.5rem'
                fontWeight='500'
            >
                {hiragana}
            </Text>
            <Text
                alignSelf='left'
            >
                {descr}
            </Text>
            <Button
                fontFamily='Montserrat'

            >
                GO
            </Button>
        </Box>
            
    )
}

export default Feature