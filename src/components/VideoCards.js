import React from 'react'

const VideoCards = ({videoInfo}) => {
  
  // if(videoInfo===null)return <h1>Loading...</h1>
  const {snippet,statistics} = videoInfo
  const {localized,thumbnails} = snippet
  const {viewCount,likeCount} = statistics
  
  
  return (
    <div className='p-1 m-2 w-72 h-72  shadow-lg'>
       <img className='rounded-lg' src={thumbnails?.medium?.url} alt='video-Image'/>
       <ul>
        <li className='font-bold'>{localized?.title}</li>
        {/* <li className='font-extralight text-gray-600 line-clamp-6'>{localized?.description}</li> */}
        <li>{viewCount}</li>
        <li>{likeCount}</li> 
         </ul>
    </div>
  )
}

export const AddVideoCard = ({info})=> {
    return(
      <div className='border border-red-900'>
        <VideoCards videoInfo={info }/>
      </div>
    )
}
export default VideoCards
