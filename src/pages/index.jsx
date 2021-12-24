import React from 'react'
import HomeHead from '../components/HomeHeader'
import LandingTitle from '../components/LandingTitle'
import Feature from '../components/Feature'
import {Box, Container} from '@chakra-ui/react'





const Home = () => {
	return (
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<Container maxW='container.lg'>
				<LandingTitle/>
				<Feature
					title='Creator'
					hiragana='作成者'
					descr='I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.'
				/>
			</Container>
		</Box>
	)
}


export default Home
