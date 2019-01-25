import React from 'react'
import './image.css'

export default function  Image1(props){
  if (props.button1) {
  return ( <img src="https://media.giphy.com/media/j3gsT2RsH9K0w/giphy.gif" alt="the first party pic" />
  ) } else {
    return null
  }
}