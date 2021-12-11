import React from 'react';
import {Text, Grid, Box, Container} from '@chakra-ui/react'


const HomeHead = (props) => {

    return (
        <Grid maxWidth={'100vw'}>
            <Box w='100%' bgColor='secondary.100' p={3}>
                <Container>
                    <Text color='primary.100' >GUILLEM GARCIA </Text>
                </Container>
            </Box>
        </Grid>
    )
}

export default HomeHead