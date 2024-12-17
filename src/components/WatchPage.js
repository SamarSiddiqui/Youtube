import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closedSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import useComment from '../hooks/useComment'
import CommentsSection from './CommentsSection'
import { Google_API_Key } from '../utils/constants'
import VideoDetails from './VideoDetails'

const WatchPage = () => {
  useComment()
  const [searchParam] =  useSearchParams()
  const [videoDetails,setVideoDetails] = useState({})
  const dispatch = useDispatch()
  
  const videoLink = searchParam.get('v')  
  
  useEffect(()=> {
    dispatch(closedSidebar())
    fetchMovieDetails()
  },[])
  
  

  const fetchMovieDetails = async()=> {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoLink}&key=${Google_API_Key}`)

    const json = await data.json()
    setVideoDetails(json?.items[0])
    
    
  }
  return (
    <div className='w-screen h-screen relative'>
      <div className='w-[85vw] h-[150vh] m-auto border border-red-900 flex justify-around mt-20 gap-5 '>
      {/* Video And Comment Section */}
       <div className='w-[70%] h-[60%] bg-red-300'>
       <div className='m-auto border'>
<iframe className='rounded-xl my-2 m-auto' width="100%" height="450" src={`https://www.youtube.com/embed/${videoLink} `}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <h1>{videoDetails?.snippet?.title}</h1>
  <VideoDetails details={videoDetails}/>
  <h1>{videoDetails?.statistics?.commentCount} Comments</h1>
  <CommentsSection videoId={videoLink}/>
       </div>
       {/* suggested Videos */}
      <div className='w-[30%] h-[60%] bg-yellow-300'>
           suggested videos
      </div>
      </div>
      
      
     
     
    </div>
  )
}

export default WatchPage


{/* <div>
<iframe className='rounded-xl my-2' width="760" height="515" src={`https://www.youtube.com/embed/${videoLink} `}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div> */}