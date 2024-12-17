import React from 'react'

const VideoDetails = ({details}) => {
    if(details===null) return 
  let {snippet,statistics} = details
    
  return (
    <div className=''>
        {/* VideoTitle */}
     <div className='grid grid-cols-[40%,60%] '>
        <div className=' border '>
            <div>
                <h1>{snippet?.channelTitle}</h1>
            </div>
        </div>
        <div className=' flex justify-evenly'>
            <button className='px-3 py-2 bg-gray-500/50 m-1 rounded-xl'>
            <i className="fa-regular fa-thumbs-up pr-1"></i> 
            { statistics?.likeCount}
            </button>
            {/* <button>
            <i className="fa-regular fa-thumbs-down"></i>         </button> */}
            <button className='px-3 py-2 bg-gray-500/50 m-1 rounded-xl'><i className="fa-solid fa-share"></i> Share</button>
            <button className='px-3 py-2 bg-gray-500/50 m-1 rounded-xl'><i className="fa-solid fa-download"></i> Download</button>
            <button className='px-3 py-2 bg-gray-500/50 m-1 rounded-xl'><i className="fa-solid fa-ellipsis"></i></button>
        </div>
     </div>
        {/* VideoDescription */}
     <div className='bg-gray-200 rounded-lg'>
      <h2>{statistics?.viewCount} views</h2>
      <p>{snippet?.localized?.description}</p>
      
     </div>
     
    </div>
  )
}

export default VideoDetails
