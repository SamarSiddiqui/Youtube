import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sideBarOpen } from '../utils/appSlice'
import { Youtube_Search_Api } from '../utils/constants'
import SearchBarDropDown from './SearchBarDropDown'
 
const Header = () => {
   const dispatch = useDispatch()
   const [searchInput,setSearchInput] = useState('')
   const [searchResults,setSearchResults] = useState([])
   const [showSuggestion,setShowSuggestion] = useState(false)
   
   const toggleSideBar = ()=>{
     dispatch(sideBarOpen())
   }
   
   useEffect(()=>{
    const timer = setTimeout(()=>fetchingData(),200)
    return () =>{clearTimeout(timer)}
    
  },[searchInput])
  
  
  const fetchingData = async()=> { 
    const data = await fetch(Youtube_Search_Api+searchInput)
    const json = await data.json()
  setSearchResults(json[1])
  
}
  return (
    <div className='relative grid grid-flow-col shadow-lg items-center py-3 z-50'>

      { /* Logo&Menu */}
      <div className='flex col-span-1'>
        <h1 className='mx-5' onClick={toggleSideBar}>
      <i className="text-2xl fa-solid fa-bars cursor-pointer"></i>
        </h1>
        <img className='h-7' alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s'/>
      

      </div>

     {/* InputField */}
     <div className='col-span-9   text-center '>

        <input className='text-black font-extralight w-[55%] py-2 border pl-6  border-gray-300 rounded-l-full decoration-transparent outline-none' type='text'
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=>setShowSuggestion(false) }
        placeholder='Search'
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        />
            
        <button><i className=" bg-gray-300/30 rounded-r-full border border-gray-300 py-3 px-7 p-3 fa-solid fa-magnifying-glass hover:bg-gray-300"></i></button>
        <button><i className="bg-gray-300/30 py-3 px-3.5 rounded-full ml-4 fa-solid fa-microphone hover:bg-gray-300"></i></button>
        <div className=''>
        { showSuggestion && <SearchBarDropDown listData={searchResults}/>}
        </div>
      </div>

      {/* Icons */}
      <div className='col-span-2 text-center text-2xl'>
        <i className="fa-solid fa-video pr-4"></i>
        <i className="fa-regular fa-bell px-4"></i>
        <i className="fa-solid fa-user pl-4"></i>
      </div>
    </div>
  )
}

export default Header
