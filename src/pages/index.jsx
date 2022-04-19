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
	{title: 'Creador', hiragana: '作成者', descr: 'Una persona curiosa que trata de entender aquello que le rodea. Si quieres saber más entra.', page: '/about'},
	{title: 'Pensador', hiragana: '思想家', descr: 'Aquí está mi contenedor donde guardo mis ideas, relatos y reflexiones sobre todo lo que me parece interesante y siento necesidad de  escribir. Estás totalmente invitado a entrar y echar un ojo.', page: '/blog'},
	{title: 'Diseñador', hiragana: '設計者', descr: 'A veces dejo que mi cabeza intente dar forma a algunas ideas locas y aquí tenéis el resultado. Espero que os pueda servir de algo.', page: '/designs'},
	{title: 'Developer', hiragana: '開発者', descr: 'Como desarrollador de software y estudiante que soy, no hay nada que me permita mejorar y mostrar este proceso como un proyecto. Aquí encontrarás todos aquellos proyectos que he creado, construido y quién sabe si terminado.', page: '/projects'},
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
