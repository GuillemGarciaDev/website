import React from 'react'
import {Text, Grid, Box, Container, HStack} from '@chakra-ui/react'
import Clock from './Clock'

const HomeHead = () => {

	return (
		<Grid maxWidth={'100vw'}>
			<Box zIndex={2} w='100%' bgColor='secondary.100' p={3}>
				<Container maxW='container.lg'>
					<HStack>
						<Text fontFamily='Montserrat' marginRight='auto' fontWeight='500' color='primary.100' >GUILLEM GARCIA </Text>
						<Clock/>
					</HStack>
				</Container>
			</Box>
		</Grid>
	)
}

export default HomeHead