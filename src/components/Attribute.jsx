import React from 'react'
import {VStack, Text, Button} from '@chakra-ui/react'


const Attribute = ({title, subtitle, description}) => {

	return (
		<VStack>
			<Text>
				{title}
			</Text>
			<Text>
				{subtitle}
			</Text>
			<Text>
				{description}
			</Text>
			<Button>GO</Button>
		</VStack>
	)
}

export default Attribute