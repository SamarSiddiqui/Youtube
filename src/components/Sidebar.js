import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
   const isSideBarOpen = useSelector((store)=>store?.app?.isSideBarOpen)
   

   //Early Return
   if(!isSideBarOpen) return null

  return (
    <div className='w-60 relative'>
      <div className=''>
        <ul className='p-3 w-[95%] m-auto text-lg border-gray-400 border-b-[1px] '>
          <li className=' py-1.5 hover:bg-gray-200 hover:rounded-md cursor-pointer'><i className="fa-solid fa-house mr-5 mx-1"></i><Link to={'/'}>Home</Link></li>
          <li className=' py-1.5 hover:bg-gray-200 hover:rounded-md cursor-pointer'><i className="fa-solid fa-film mr-5 mx-1"></i>Shorts</li>
          <li className=' py-1.5 hover:bg-gray-200 hover:rounded-md cursor-pointer'><i className="fa-solid fa-tv mr-5 mx-1"></i>Subscriptions</li>         
        </ul>
      </div>

       
    </div>
  )
}

export default Sidebar
