import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx'
import {Flex}

const Designs = ( {designs} ) => {

    return (
        
    )
}

export default Designs

export async function getStaticProps () {

    const designs = await getAllFilesMetadata('designs')
    return {
        props: designs
    }
}