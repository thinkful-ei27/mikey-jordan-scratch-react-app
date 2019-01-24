import React from 'react'

export default function  Image1(props){
  if (props.buttons.button2 && props.buttons.button1) {  
  return ( <img src="https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif" alt="the final party pic" />
  ) } else {
    return null
  }
}