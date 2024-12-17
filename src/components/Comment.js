import React from 'react'
import { User_Dp } from '../utils/constants';

const Comment = ({props}) => {
  
    let {authorDisplayName,authorProfileImageUrl,textDisplay} = props
    console.log(props);
    

  return (
    <div className='flex border my-2'>
      {/* photoUrl */}
      <div className=' w-16  flex items-start justify-center'>
        <img alt='userDp' className='rounded-full w-12' src={authorProfileImageUrl || User_Dp}/>         
      </div>
      {/* commentDetails */}
      <div className=' w-full h-20'>
        <h1>{authorDisplayName}</h1>
        <p dangerouslySetInnerHTML={{__html: textDisplay}} className='px-1'></p>
      </div>
    </div>
  )
}

export default Comment
