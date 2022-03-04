import {Heading, Text, Image, Flex, Divider} from '@chakra-ui/react'

export default {
    h1: (props) => <Heading margin={["2rem 1rem 1rem", "2rem 1rem", "4rem 1rem 1rem", "4rem 1rem 1rem"]} as='h1' size='2xl' {...props}/>,
    h2: (props) => <Heading margin='1rem 1rem' as='h2' size='xl' {...props} />,
    h3: (props) => <Heading margin='1rem 1rem' as='h3' size='lg' {...props}/>,
    h4: (props) => <Heading margin='1rem 1rem' as='h4' size='md' {...props}/>,
    p:  (props) => <Text margin='1rem 1rem' fontSize='16px' fontFamily='Montserrat' {...props}/>,
    img: (props) => <Flex flexDirection='row' justifyContent='center' alignItems='center'><Image alignSelf='center' margin='2rem 1rem' width={['80%', '80%', '40%','40%']} height={['80%', '80%', '40%','40%']} {...props}/></Flex>,
    hr: (props) => <Divider color='black'/>,
}