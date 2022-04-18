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
			100:'#EEEEEE'
		},
		primaryVariant: {
			100:'#EEEEEE'
		},
		secondary: {
			100:'#393E46'
		},
		secondaryVariant: {
			100:'#222831'
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
		body: 'Montserrat',
		heading: 'Bogart',
	},
	breakpoints
})

export default theme