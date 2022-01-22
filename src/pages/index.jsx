import React from 'react'
import HomeHead from '../components/HomeHeader'
import LandingTitle from '../components/LandingTitle'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import {Box, Container, SimpleGrid, Flex} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'

const features = [
	{title: 'Creator', hiragana: '作成者', descr: 'I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.', page: '/about'},
	{title: 'Thinker', hiragana: '思想家', descr: 'During my existence in this world, I usually think about everything that surrounds me, trying to understand it and share all my learning with anyone who is willing to listen to me. If you are one of these you are ready to start reading.', page: '/blog'},
	{title: 'Designer', hiragana: '設計者', descr: 'I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.', page: '/designs'},
	{title: 'Developer', hiragana: '開発者', descr: 'During my existence in this world, I usually think about everything that surrounds me, trying to understand it and share all my learning with anyone who is willing to listen to me. If you are one of these you are ready to start reading.', page: '/projects'},
]

const Home = () => {
	return (
		
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<AnimatedPage>
			<Container maxW='container.lg'>
				<LandingTitle/>
				<Flex alignItems='center' justifyContent='center'>
					<SimpleGrid columns={2} spacing={5} padding='4rem 0rem 12rem'>
						{features.map(el =>
							<Feature 
								title={el.title}
								hiragana={el.hiragana}
								descr={el.descr}
								page={el.page}
							/>
						)}
						
					</SimpleGrid>
				</Flex>
			</Container>
			</AnimatedPage>
			<Footer/>
		</Box>
	)
}


export default Home
