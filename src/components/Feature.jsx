import React from 'react'
import  {Text, Box} from '@chakra-ui/react'
import CustomButton from './CustomButton'

const Feature = ({title, hiragana, descr}) => {

    return (
        <Box maxW='400' maxH='334'>
            <Box display='flex' flexDirection='column' alignItems='left'>
                <Text
                    fontSize='3.75rem'
                    fontWeight='600'
                >
                    {title}
                </Text>
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
            <Box display='flex' flexDirection='column' alignItems='center' marginTop='2rem'>
                <CustomButton
                    text='GO'
                    size='md'
                />
            </Box>
        </Box>
            
    )
}

export default Feature