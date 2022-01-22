import {Heading, Text, Image} from '@chakra-ui/react'

export default {
    h1: (props) => <Heading as='h1' {...props}/>,
    h2: (props) => <Heading as='h2' {...props}/>,
    p:  (props) => <Text fontFamily='Montserrat' {...props}/>,
    img: (props) => <Image width='100%' height='100%' />
}