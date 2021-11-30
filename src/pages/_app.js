import React from 'react'
import { ChakraProvider, Text } from '@chakra-ui/react'
import theme from '../utils/theme'
import Fonts from '../components/Fonts'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout>
			<Component {...pageProps} />
			</Layout>
			
		</ChakraProvider>
	)
}

export default MyApp

