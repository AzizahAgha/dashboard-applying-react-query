import { useQuery } from "react-query"
import axios from "axios"
import { Link } from "react-router-dom"

const fetchPosts=()=>{
    return axios.get(' http://localhost:4000/posts')
}

export const HomePage = () => {

    const {isError,error,data,isFetching,refetch} =useQuery( 'posts', fetchPosts,
        {
        
           
            // select:(data)=>{
            //     const postTitle=data.data.map((post)=>post.title)
            //     return postTitle
            // },
        } )

    return(

        <div>
            <h1>Home</h1>
            <Link>User 1</Link>
            <Link>User 2</Link>
            {data?.data.map((post)=>{
            return <div key={post.userId}>
            <p>{post.id}{post.title}</p>
            <p>{post.id}{post.body}</p>
            </div>
          })}
        </div>
    )
}