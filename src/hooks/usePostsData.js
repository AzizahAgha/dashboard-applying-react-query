import { useQuery } from "react-query"
import axios from 'axios'

const fetchPosts=()=>{
    return axios.get(' http://localhost:4000/posts')
}

export const usePostData=(onSuccess,onError)=>{
  return  useQuery(
        'posts',
        fetchPosts,
        {
           onSuccess,
           onError
            // select:(data)=>{
            //     const postTitle=data.data.map((post)=>post.title)
            //     return postTitle
            // },
        }
        )
}