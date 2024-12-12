import React from 'react'
import Button from './Button'
import { buttonList } from '../utils/constants'
const ButtonList = () => {
  return (
    <div className='border flex flex-nowrap overflow-x-auto overflow-y-hidden
    pt-2  h-14 w-screen '>
      {
        buttonList.map((name,index)=><Button title={name} key={index}/>)
      }
      
    </div>
  )
}

export default ButtonList
