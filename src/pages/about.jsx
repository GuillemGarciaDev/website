import React from 'react'
import Navbar from '../components/Navbar'
import {Container, SimpleGrid, Box, Text, Flex} from '@chakra-ui/react'
import CustomButton from '../components/CustomButton'
import Footer from '../components/Footer'

const About = () => {

    return (
        <Box backgroundColor='primaryVariant.100'>
            <Navbar/>
            <Container maxW='container.lg'>
                <SimpleGrid 
                    columns={[1, 2, 2, 2, 2]} 
                    padding='12rem 0rem'
                    spacing={10}
                >
                    <Flex flexDirection='column' justifyContent='center'>
                        <Text
                            fontSize='3rem'
                            fontWeight='600'
                        >
                            About Guillem
                        </Text>
                        <Text
                            fontSize='1rem'
                            fontWeight='400'
                            margin='1rem 0rem'
                        >
                            Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit rationibus pri. Erant putant luptatum ex sit, error euismod ad qui, meliore voluptatum complectitur an vix. Clita persius sed et, vix vidit consulatu complectitur ex. Per nonummy postulant assentior an, mea audiam fabellas deserunt id.
                        </Text>
                        <CustomButton
                            text='GO BACK'
                            size='md'
                            page='/'
                            width='6.25rem'
                        />
                    </Flex>
                    <Box>
                        <Box width='300' height='450' backgroundColor='secondary.100'>

                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
            <Box 
				zIndex={2}
				display='flex'
				position='relative'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				backgroundColor='secondary.100'
			>
				<Footer/>
			</Box>
        </Box>
        
    )
}

export default About