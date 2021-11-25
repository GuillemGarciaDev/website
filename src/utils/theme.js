import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		primary: {
			100:'#F0F5F9'
		},
		primaryVariant: {
			100:'#C0DBF0'
		},
		secondary: {
			100:'#C9D6DF'
		},
		secondaryVariant: {
			100:'#018786'
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
		body: "Bogart",
		heading: "Bogart"
	}
})

export default theme