import React, { useEffect, useState } from 'react'
import { Youtube_Video_Api } from '../utils/constants'
import VideoCards,{AddVideoCard} from './VideoCards'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
   const [videos,setVideos] = useState([])
   useEffect(()=> {
    getVideos()
  },[])

  const getVideos = async () => {
    const data = await fetch(Youtube_Video_Api)

    const json = await data.json() 
    setVideos(json?.items)
    
  }
 
  return (
    <div className='cursor-pointer flex flex-wrap overflow-auto'>
     {videos[0]&& <AddVideoCard info={videos[0]}/>}
      {videos.map((video)=> <Link key={video?.id} to={`/watch?v=${video.id}` }><VideoCards  videoInfo={video}/></Link>)}
     
    </div>
  )
}

export default VideoContainer
