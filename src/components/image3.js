import React from 'react'
import './image.css'

export default function Image3(props){
  if (props.button3) {  
  return ( <img src="https://media.giphy.com/media/TfKfqjt2i4GIM/giphy.gif" alt="the final party pic" />
  ) } else {
    return null
  }
}