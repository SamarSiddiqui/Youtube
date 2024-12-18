import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sideBarOpen } from '../utils/appSlice'
import { Youtube_Search_Api } from '../utils/constants'
import SearchBarDropDown from './SearchBarDropDown'
import { cacheResults } from '../utils/searchSlice'
 
const Header = () => {
   const dispatch = useDispatch()
   const [searchQuery,setsearchQuery] = useState('')
   const [searchResults,setSearchResults] = useState([])
   const [showSuggestion,setShowSuggestion] = useState(false)
   const searchCache = useSelector((store)=>store.search)

   const toggleSideBar = ()=>{
     dispatch(sideBarOpen())
   }
                            
 useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSearchResults(searchCache[searchQuery])
      } else{
        getSearchData()
      }
    },200)
    return () =>{clearTimeout(timer)}
 },[searchQuery])

  const getSearchData = async()=> { 
    const data = await fetch(Youtube_Search_Api+searchQuery)
    
    const json = await data.json()
  setSearchResults(json[1])  
  dispatch(cacheResults({
    [searchQuery]:json[1]
  }))
}

  return (
    <div className='relative border-b-red-700 border-[2px]'>
    <div className=' fixed top-0 grid grid-flow-col shadow-lg items-center py-3 z-50 w-screen bg-white'>

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
        value={searchQuery}
        onChange={(e)=>setsearchQuery(e.target.value)}
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
    </div>
  )
}

export default Header
