import { useQuery,useQueryClient } from 'react-query'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios'
import { useState } from 'react'
import { usePostData } from '../hooks/usePostsData'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'

const errorMessage={
  color:"#D8000C",
 backgroundColor: "#FFBABA",
 margin: "10px 0",
 padding: "10px",
 borderRadius: "3px 3px 3px 3px",
}


const putPosts= async(postt)=>{
  return axios.patch(' http://localhost:4000/posts' + "/" + postt.id ,postt)
}

const deletePosts= async(post)=>{
  if(window.confirm("Are you sure want to delete?")) {
    return await axios.delete(' http://localhost:4000/posts' + "/" + post.id ,post)
  }

}

export const ListPost = () => {
  const [visible,setVisible]=useState(false);
  const queryClient=useQueryClient()

    const onSuccess=(data)=>{
        console.log('Perform side effect after data fetching',data)
        
    }

    const onError=(error)=>{
      console.log('Perform side effect after encountering error',error)
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 3000);
       
    }

    const updatePost=useMutation(putPosts,{
      onSuccess:()=>{
        queryClient.invalidateQueries('posts')
        alert("Data has been updated succesfully!")
     }
    })

    const deletePostsMutation=useMutation(deletePosts,{
      onSuccess:()=>{
        queryClient.invalidateQueries('posts')
        alert("Data deleted succesfully!")
     },
      onError
      
   })


    const {isError,error,data,isFetching,refetch} =
     usePostData(onSuccess,onError)

   // console.log({isLoading,isFetching})

    // if (isLoading||isFetching) {
    //   return <h2>Loading...</h2>
    // }
  
    if(isError){
        return <h2>{error.message}</h2>
        setVisible(true)
    }
   
    return (
        <div class='wrap'>
        <h1>Edit Posts</h1>
        <br></br>
        {visible ?<div className='error-message' style={errorMessage}>Error ! Data could not get deleted</div>:null}

        <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                    
                    </tr>
                </thead>
                 <tbody>
                 {data?.data.map((post,key)=>{
                    return(
                        <tr key={key}>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{post.body}</td>

                         
                          <td>
                            
                          <Link className="btn btn-warning mr-3" to={`/edit/${post.id}`}>Edit</Link>
                            <Link className='delete btn btn-danger ml-3'   onClick={() => deletePostsMutation.mutate({id:post.id})}>Delete</Link>
                          </td>
                          </tr>
                   );
                 }
                       
                    
                     )}      
                  </tbody>
                      
                  
                                  
             </table>
       
          {/* {data.data.title} - {data.data.body}
          {data?.data.map((post)=>{
            return <div key={post.title}>{post.title}</div>
          })} */}

          {/* {data.map((ptitle)=>{
            return <div key={ptitle}>{ptitle}</div>
          })} */}
          {/* <button onClick={refetch}>Fetch Posts</button> */}
        </div>
      )
    
}


