import './ImageList.css'
import React from 'react'

import ImageCard from './ImageCard'

const ImageList = (props)=>{
   const images= props.images.map(value=>{
        return <ImageCard image={value} key={value.id} />
    })
    return <div className='image-list'>{images}</div>
}

export default ImageList