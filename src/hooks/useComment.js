import { useEffect, useState } from "react"
import { Google_API_Key, Youtube_Comment_Api } from "../utils/constants"

const useComment =  (videoId)=> {
    let [commentData,setCommentData] = useState([])
    const fetchCommentData = async ()=> {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=
        + ${Google_API_Key}`)
        const json = await data.json() 
        setCommentData(json.items)
        // console.log(json.items);
               
    }


    useEffect(()=>{
        fetchCommentData()
    },[])
    return commentData
}


export default useComment