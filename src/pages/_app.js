import React from 'react'
import { ChakraProvider, Text } from '@chakra-ui/react'
import theme from '../utils/theme'
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp

