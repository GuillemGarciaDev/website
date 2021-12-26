import React from 'react'
import HomeHead from '../components/HomeHeader'
import LandingTitle from '../components/LandingTitle'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import {Box, Container, SimpleGrid} from '@chakra-ui/react'


const Home = () => {
	return (
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<Container maxW='container.lg'>
				<LandingTitle/>
				<SimpleGrid columns={2} spacing={5} padding='4rem 0rem 12rem'>
					<Feature
						title='Creator'
						hiragana='作成者'
						descr='I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.'
					/>
					<Feature
						title='Thinker'
						hiragana='思想家'
						descr='During my existence in this world, I usually think about everything that surrounds me, trying to understand it and share all my learning with anyone who is willing to listen to me. If you are one of these you are ready to start reading.'
					/>
					<Feature
						title='Designer'
						hiragana='設計者'
						descr='I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.'
					/>
					<Feature
						title='Developer'
						hiragana='開発者'
						descr='During my existence in this world, I usually think about everything that surrounds me, trying to understand it and share all my learning with anyone who is willing to listen to me. If you are one of these you are ready to start reading.'
					/>
				</SimpleGrid>
			</Container>
			<Box 
				display='flex'
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


export default Home
