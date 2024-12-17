import React from 'react'
import useComment from '../hooks/useComment'
import Comment from './Comment';

const CommentsSection = ({videoId}) => {
  const commentData =  useComment(videoId)
  // console.log(commentData);
  
  // console.log(commentData[1]?.snippet?.topLevelComment?.snippet?.textDisplay);
  // console.log(commentData[16]?.snippet?.topLevelComment?.snippet?.textDisplay);
  
  return (
    <div>

      {
       commentData.map((comment)=><Comment props={comment?.snippet?.topLevelComment?.snippet}/>)
      }
    </div>
  )
}

export default CommentsSection
