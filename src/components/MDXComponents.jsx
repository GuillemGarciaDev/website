import {Heading, Text, Image, Flex} from '@chakra-ui/react'

export default {
    h1: (props) => <Heading margin='1rem 1rem 2rem' as='h1' size='2xl' {...props}/>,
    h2: (props) => <Heading margin='1rem 1rem' as='h2' size='xl' {...props} />,
    h3: (props) => <Heading margin='1rem 1rem' as='h3' size='lg' {...props}/>,
    p:  (props) => <Text margin='1rem 1rem' fontSize='16px' fontFamily='Montserrat' {...props}/>,
    img: (props) => <Flex flexDirection='row' justifyContent='center' alignItems='center'><Image alignSelf='center' margin='2rem 1rem' width='80%' height='80%' {...props}/></Flex>
    
}