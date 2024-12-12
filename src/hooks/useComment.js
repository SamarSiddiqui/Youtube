import { useEffect } from "react"
import { Youtube_Comment_Api } from "../utils/constants"

const useComment =  ()=> {
    const fetchCommentData = async ()=> {
        const data = await fetch(Youtube_Comment_Api)
        const json = await data.json() 
        console.log(json);
        
    }


    useEffect(()=>{
        fetchCommentData()
    },[])
}


export default useComment