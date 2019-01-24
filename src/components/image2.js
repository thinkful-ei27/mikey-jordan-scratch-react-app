import React from 'react'

export default function  Image2(props){
  if (props.button2) {
  return ( <img src="https://media.giphy.com/media/d89VuJ4GflFfO/giphy.gif" alt="the second party pic" />
  ) } else {
    return null
  }
}