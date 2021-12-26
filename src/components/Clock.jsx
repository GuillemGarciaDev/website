import React, {useState, useEffect} from 'react'
import {Text} from '@chakra-ui/react'

const Clock = () => {

	const [time, setTime] = useState(new Date())
    
	useEffect(() => {
        
		let currentTime = setInterval(() => setTime(new Date()), 1000)
		return function cleanUp() {clearInterval(currentTime)}
	})

	return (
		<Text fontFamily="Montserrat" fontWeight='500' color='primary.100'>BCN {time.getHours().toString()}:{time.getMinutes() < 10 ? "0" + time.getMinutes().toString() : time.getMinutes().toString()}</Text>
	)
}

export default Clock