import React from 'react'
import Attribute from '../components/Attribute'
import HomeHead from '../components/HomeHeader'
import {Box, Container} from '@chakra-ui/react'


const Home = () => {
	return (
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<Container maxW='container.lg'>
				<Attribute title={'Creator'} subtitle={'hiragana'} description={'Lorem bla bla la baasdfm nmi asdfn asjdhnf kja'} />
			</Container>
		</Box>
	)
}


export default Home
