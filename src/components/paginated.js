import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";


const fetchPosts=(page)=>{
    return axios.get(` http://localhost:4000/posts?_limit=6&_page=${page}`)
}
export const Page=()=>{
    const [page,setPage]=useState(1)
    const {isLoading,isError,data,error,isPreviousData}=useQuery(['posts',page],
    ()=>fetchPosts(page),
    {
        keepPreviousData:true
    })

    if(isLoading){
        return <h2>is loading.....</h2>
    }

    if(isError){
        return <h2>(error.message)</h2>
    }

    return(

        <div>
        <h2>Employees</h2>
        <hr></hr>
           <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                  
                    
                    </tr>
                </thead>
                 <tbody>
                 {data?.data.map((post,key)=>{
                    return(
                        <tr key={key}>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{post.body}</td>

                        
                          </tr>
                    );
                 }
                       
                    
                    )}      
                 </tbody>
                      
                  
                                  
            </table>
            <hr></hr>
            <div>
            <span style={{marginRight:'20px'}}>Current Page: {page}</span>
            <button onClick={()=>setPage((page)=>page-1)} disabled={page===1} >Prev</button>
            <button onClick={()=>setPage((page)=>page+1)} disabled={page===4}>Next</button>
            {/* <p>Current page:{page}</p> */}
            
            <br></br>
            {/* <p>Current Page: {page}</p> */}
            </div>



            {/* <span>Current Page: {page + 1}</span>
       <button
         onClick={() => setPage(old => Math.max(old - 1, 0))}
         disabled={page === 0}
       >
         Previous Page
       </button>{' '}
       <button
         onClick={() => {
           if (!isPreviousData && data.hasMore) {
             setPage(old => old + 1)
           }
         }}
         // Disable the Next Page button until we know a next page is available
         disabled={isPreviousData || !data?.hasMore}
       >
         Next Page
       </button> */}
            
        </div>
    )

}