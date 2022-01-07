import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx'


const Designs = ( {designs} ) => {

    
}

export default Designs

export async function getStaticProps () {

    const designs = await getAllFilesMetadata('designs')
    return {
        props: designs
    }
}