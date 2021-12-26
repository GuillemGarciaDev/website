import React from 'react'
import  {Text, Box} from '@chakra-ui/react'
import CustomButton from './CustomButton'

const Feature = ({title, hiragana, descr}) => {

    return (
        <Box display='flex' flexDirection='column' alignItems='left' maxW='400' maxH='400'>
            <Text
                alignSelf='left'
                fontSize='3.75rem'
                fontWeight='600'
            >
                {title}
            </Text>
            <Box display='flex' flexDirection='column' alignItems='center' marginBottom='1rem'>
                <Text
                    alignSelf='right'
                    fontSize='1.5rem'
                    fontWeight='500'
                    
                >
                    {hiragana}
                </Text>
            </Box>
            <Text>
                {descr}
            </Text>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='flex-end'>
                <CustomButton
                    text='GO'
                    size='md'
                />
            </Box>
        </Box>
            
    )
}

export default Feature