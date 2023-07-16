import React from 'react'
import SingleUser from './SingleUser'
function Person(props) {
    const h=(item)=>{
      console.log("parent",item)
      props.pro(item)
    }
  return (
    <SingleUser h={h}/>
  )
}

export default Person