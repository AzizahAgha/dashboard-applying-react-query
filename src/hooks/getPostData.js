import axios from "axios";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";


const getPost=({ queryKey })=>{
    const id= queryKey[1]
    return axios.get(`http://localhost:4000/posts/${id}`)
}

export const GetPostData=id=>{
    // return useQuery(['post',id],()=>getPost(id))

    const queryClient = useQueryClient()
    return useQuery(['post', id], getPost, {
      initialData: () => {
        const hero = queryClient
          .getQueryData('posts')
          ?.data?.find(hero => hero.id === parseInt(id))
        if (hero) {
          return { data: hero }
        } else {
          return undefined
        }
      }
    })
   
}