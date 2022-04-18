import React from 'react'
import HomeHead from '../components/HomeHeader'
import LandingTitle from '../components/LandingTitle'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import {Box, Container, SimpleGrid, Flex} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

const features = [
	{title: 'Creator', hiragana: '作成者', descr: 'I am a brief instant in the existence of time that tries to innovate and create new ideas that improve this world. To learn about my past, present and future click here.', page: '/about'},
	{title: 'Thinker', hiragana: '思想家', descr: 'Here is my container where I keep my ideas, writings and reflections on everything I find interesting and need to write. You are totally invited to enter', page: '/blog'},
	{title: 'Designer', hiragana: '設計者', descr: 'Sometimes I let my head try to give shape to some crazy ideas and here you have the result. I hope it can be of some use to you.', page: '/designs'},
	{title: 'Developer', hiragana: '開発者', descr: 'As a software developer and student that I am, there is nothing that allows me to improve and show this process as a project. Here you will find all those projects that I have created, built and who knows if finished.', page: '/projects'},
]

const Home = () => {
	return (
		
		<Box backgroundColor='primaryVariant.100'>
			<HomeHead/>
			<AnimatedPage>
			{/*<Box position='absolute' left='10%' top='10%'>
				<Sidebar/>
			</Box>*/}
			<Container maxW='container.lg'>
				<LandingTitle/>
				<Flex alignItems='center' justifyContent='center'>
					<SimpleGrid columns={[1, 1, 2, 2]} spacing={5} padding={['3rem 0rem 3rem']}>
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
