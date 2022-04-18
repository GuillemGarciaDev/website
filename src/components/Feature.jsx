import React from 'react'
import  {Text, Heading, Box, SimpleGrid} from '@chakra-ui/react'
import CustomButton from './CustomButton'

const Feature = ({title, hiragana, descr, page}) => {

    return (
        <SimpleGrid columns={1} spacing={2} >
            <Box maxW='400' maxH='334' padding="1rem">
                <Box display='flex' flexDirection='column' alignItems='left'>
                    <Heading
                        fontSize='3.75rem'
                        fontWeight='600'
                    >
                        {title}
                    </Heading>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' marginBottom='1rem'>
                    <Text
                        fontSize='1.5rem'
                        fontWeight='500'
                    >
                        {hiragana}
                    </Text>
                </Box>
                <Text>
                    {descr}
                </Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='flex-end' marginTop='2rem'>
                <CustomButton
                    text='GO'
                    size='md'
                    page={page}
                />
            </Box>
        </SimpleGrid>
            
    )
}

export default Feature