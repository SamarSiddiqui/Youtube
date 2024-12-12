import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closedSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import useComment from '../hooks/useComment'

const WatchPage = () => {
  useComment()
  const [searchParam] =  useSearchParams()
  const videoLink = searchParam.get('v')
  // console.log(searchParam.get('v'));
  
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(closedSidebar())
  },[])
  return (
    <div className='w-full h-full'>
      <div className='w-[85%] m-auto h-[150vh] border border-red-900 flex justify-around'>
      {/* Video And Comment Section */}
      <div>
      <iframe className='rounded-xl my-2' width="760" height="515" src={`https://www.youtube.com/embed/${videoLink} `}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        {/* suggestedContent */}
       <div>
        suggested content
        </div> 
      </div>
      
      
     
     
    </div>
  )
}

export default WatchPage
