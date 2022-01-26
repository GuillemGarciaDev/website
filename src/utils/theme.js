import { extendTheme } from '@chakra-ui/react'
import {createBreakpoints}  from '@chakra-ui/theme-tools' 
const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em'
})

const theme = extendTheme({
	colors: {
		primary: {
			100:'#F0E9D2'
		},
		primaryVariant: {
			100:'#E6DDC4'
		},
		secondary: {
			100:'#678983'
		},
		secondaryVariant: {
			100:'#181D31'
		},
		background: {
			100:'#1E2022'
		},
		surface: {
			100:'#1E2022'
		},
		error: {
			100:'#B00020'
		}
	},
	fonts: {
		body: 'Bogart',
		heading: 'Bogart'
	},
	breakpoints
})

export default theme