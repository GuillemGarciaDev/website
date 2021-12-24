import React from 'react'
import HomeHead from '../components/HomeHeader'
import LandingTitle from '../components/LandingTitle'
import {Box} from '@chakra-ui/react'




const Home = () => {
	return (
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<LandingTitle/>
		</Box>
	)
}


export default Home
