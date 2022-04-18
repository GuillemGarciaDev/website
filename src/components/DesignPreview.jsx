import React from 'react'
import  {Flex, Text, Image, SimpleGrid, Heading} from '@chakra-ui/react'


const DesignPreview = ({title, image, description}) => {

    return (
        <SimpleGrid columns={[1,1,2,2,2]}>
            <Flex
                flexDirection='row'
                justifyContent={['center', 'center','flex-end','flex-end','flex-end']}
                alignItems='center'
            >
                <Image margin={['1rem', '1rem','0rem 1rem', '0rem 1rem', '0rem 1rem']} src={String(image)} boxSize='150px' borderRadius='15px'/>
            </Flex>
            <Flex
                flexDirection='column'
                justifyContent={['center','center','flex-start','flex-start','flex-start']}
                
            >
                <Heading 
                    fontSize='2.125rem'
                    fontWeight='500'
                    align={['center', 'center','left','left','left']}
                    _hover={{
                        color: 'secondary.100'
                    }}
                >
                    {title}
                </Heading>
                <Text
                    fontFamily='Montserrat'
                    fontSize='0.875rem'
                    align={['center','center','left','left','left']}
                    margin={['0rem 2rem', '0rem 6rem', '0rem', '0rem', '0rem']}
                >
                    {description}
                </Text> 
            </Flex>
        </SimpleGrid>
    )
}

export default DesignPreview