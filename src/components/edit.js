import { QueryCache, useQuery,useQueryClient } from 'react-query'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios'
import { useState,React } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import { usePostData } from '../hooks/usePostsData'
import { GetPostData } from '../hooks/getPostData'
import { useParams } from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage,useFormik} from 'formik'
import { BasicScheme } from '../schemas';
import * as yup from "yup";
import { TextError } from '../schemas/textError';


// const putPosts= async(postt)=>{
//     return axios.put(' http://localhost:4000/posts' + "/" + postt.id)
//   }

  const editPosts= async({id,title,body})=>{
    return axios.put(`http://localhost:4000/posts/${id}`,{
        title,
        body,
    })
  }

  
//   const onSubmit=(e)=>{
//     e.preventDefault();
//     console.log("submitted")
     
// };




//   const getPost=(post)=>{
//     return axios.get('http://localhost:4000/posts'+ "/" + post.id)
// }
 

export const EditPost=()=>{
    const [visible,setVisible]=useState(false);
    const [submitted,setSubmitted]=useState(false);
    const [title,setTitle]=useState([]);
    const [body,setBody]=useState([]);
    const [values, setValues] = useState([]);

    

    const {id}=useParams()


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


    // const validate = values => {
    //   const errors = {};
    //   if (!values.title) {
    //     errors.firstName = 'Required';
    //   } else if (values.firstName.length > 15) {
    //     errors.firstName = 'Must be 15 characters or less';
    //   }
    
    //   if (!values.body) {
    //     errors.lastName = 'Required';
    //   } else if (values.lastName.length > 20) {
    //     errors.lastName = 'Must be 20 characters or less';
    //   }
    
    //   return errors;
    // };
   
 
//  const handleChange = event => {
//    setValues (prevValues => ({
//      ...prevValues,
//      // we use the name to tell Formik which key of `values` to update
//      [event.target.name]: event.target.value
//    }))
//  }

  //   const handleChange=(event)=>{
  //     const name=event.target.name;
  //     const value=event.target.value;
  //     setPosts({...values,[name]:value});

  // }
   

  // const {handleBlur,errors,touched,handleSubmit,handleChange}=useFormik({
  //   initialValues:{
  //     title:'',
  //     body:'',
  //   },
  //   validationSchema:yup.object().shape({
  //     title:yup.string().required("Please Enter a title"),
  //     body:yup.string().required("please enter a body"),
  // }),
  //   onSubmit:values=>{
  //     console.log('Form Data',values)
  //     console.log(errors);
  //   },
    
  // })
  // console.log('form errors',errors)
  

//const {mutate}=useMutation(editPosts)


// const SubmitHandler=(values)=>{

// const {title,body}=values

// mutate({
//     id,
//     title,
//     body
// })
//     refetch()
//     QueryCache.refetchQueries(["posts"])


// }

const CancelToken = axios.CancelToken
const source = CancelToken.source()
editPosts.cancel = () => {
  source.cancel('Query was cancelled by React Query')
}



const updatePost=useMutation(editPosts,{
    onSuccess:()=>{
      if( /^\s*\s*$/.test(title) || !/[A-Za-z]/.test(title)){
           
        //  alert("Error!..pls enter the title")
        setSubmitted(true)
        queryClient.cancelQueries('post')
        //editPosts.cancel()
        // isError()
       
      }if( /^\s*\s*$/.test(body) || !/[A-Za-z]/.test(body)){
           
             //alert("Error! pls enter the body")
             setSubmitted(true)
            // queryClient.cancelQueries('post')
            //editPosts.cancel()
            //  isError()
            
           }
          else{
           // queryClient.invalidateQueries('posts')
            queryClient.setQueryData('posts')
             alert("Data has been updated succesfully!")
             console.log('success')
             setSubmitted(false)
            
           }
          
           
     
   },
   onError:(context)=>{
    alert("ERROR:Data could not get updated!")
   // editPosts.cancel()
    // queryClient.cancelQueries('posts')
    // const previousPost = queryClient.getQueryData('posts')
    // queryClient.setQueryData('posts', context.previousPost)
   }
  })


  const useMutateTodo =useMutation(editPosts, {
     // Notice the second argument is the variables object that the `mutate` function receives
     onSuccess: (data, variables) => {
       queryClient.setQueryData(['posts', { id: variables.id }], data)
         alert("Data has been updated succesfully!")
            console.log('sucess')
     },
   })
 


    // const UpdatePost= () =>{
    //     return useMutation(editPosts,{
    //        onSuccess:()=>{
    //          queryClient.invalidateQueries('posts')
    //          alert("Data has been updated succesfully!")
    //        }
    //    })
    // }

//const {mutate}=UpdatePost()

// const updatePostOnClick=()=>{
//     const post={title,body}
//         mutate(post)
// }


    // const {isLoading,isError,error,data,isFetching,refetch} = useQuery(
    //     'posts',
    //     getPost,
    //     {
            
    //         onError,
    //         // select:(data)=>{
    //         //     const postTitle=data.data.map((post)=>post.title)
    //         //     return postTitle
    //         // },
    //     }
    //     )

    // const patternR= /^[\s]+|[\s]+$/;
    // const pattern=/(?!\s*$)/;
    // const reg=/^(?!\s*$)[-a-zA-Z0-9_:,.' ']{1,100}$/;
const errors={}
    const initialValues={title:'',body:''}

    const onSubmit=values=>{
      console.log('Form Data',values)
      console.log(errors);}


     const {isError,error,data,isFetching,refetch} =GetPostData(id)
   

    return(
        <div>
        <div className='box'>
        {/* <div className='left'>
        <h6 ><strong>Title: </strong>{data.data.title}</h6>
         <h6><strong>Body:</strong> {data.data.body}</h6>
        </div> */}
        
            <hr></hr>
            
             {/* <Formik
             initialValues={initialValues}
             validationSchema={BasicScheme}
             onSubmit={()=>updatePost.mutate({title,body,id})}
            //onSubmit={()=>useMutateTodo.mutate({title,body,id})}
            >
            <Form className=" create-form">

            <div>
            <label><strong>Title:</strong></label>    */}
            {/* <input type="text" name="title" className={errors.title  ? "inputError form-control":"form-control"} onChange={(e)=>setTitle(e.target.value)}/> */}
            {/* <Field 
            type="text" 
            name="title" 
            // onChange={(e)=>setTitle(e.target.value)}
            // className={formik.errors.title && formik.touched.title  ? "inputError form-control":"form-control"} 
            />
           </div> 
             <ErrorMessage name='title' component={TextError}/> */}
            {/* {formik.errors.title && formik.touched.title ? <p className='error'>Please enter a title</p>:null} */}
            
            {/* <br></br>            
            
            <div >
            <label><strong>Body:</strong></label>               */}
            {/* <input type="text" name="body" className={errors.body  ? "inputError form-control":"form-control"}   onChange={(e)=>setBody(e.target.value)}/> */}
            {/* <Field 
            type="text" 
            name="body" 
            // onChange={(e)=>setBody(e.target.value)}
            // className={formik.errors.body && formik.touched.body ? "inputError form-control":"form-control"}
             />
             </div>
            <ErrorMessage name='body' component={TextError}/> */}
            {/* {formik.errors.body&& formik.touched.body  ? <p className='error'>Please enter a body</p>:null} */}
            

            {/* <br></br>
            <button type='submit'>submit</button> */}
            {/* <Link className="btn btn-warning mr-3"  onClick={()=>updatePost.mutate({title,body,id})} >Update</Link> */}

            {/* </Form>
            </Formik>   */}


            <form 
            // onSubmit={()=>updatePost.mutate({title,body,id})}
            >
              <div>
              <label><strong>Title:</strong></label>  
              <input 
              type="text" name="title" required
              // className={errors.title && touched.title  ? "inputError form-control":"form-control"} 
              // onBlur={handleBlur}
              value={title.title}
               onChange={(e)=>setTitle(e.target.value)}
              //  onChange={handleChange}
              /> 
              </div>
            {/* {errors.title && touched.title ? <p className='error'>Please enter a title</p> : null }  */}
             { submitted && /^\s*\s*$|^(?:(?![A-Za-z]).)*$/.test(title) ?<p className='error'>Please enter a title</p> : null}

              <div>
              <label><strong>Body:</strong></label>  
              <input type="text" name="body" required-pattern='/^\S/' required
               // className={errors.body  ? "inputError form-control":"form-control"}  
              // onBlur={handleBlur}
              value={body.body}
              onChange={(e)=>setBody(e.target.value)}
               //onChange={handleChange} 
                /> 
              </div> 
            {/* {errors.body && touched.body  ? <p className='error'>Please enter a body</p> : null }  */}
            { submitted && /^\s*\s*$|^(?:(?![A-Za-z]).)*$/.test(body)  ? <p className='error'>Please enter a body</p> : null}

              <Link type='submit' className="btn btn-warning mr-3"  
              // to='/rq-super-heroes'
               onClick={()=>updatePost.mutate({title,body,id})}
              >Update</Link>
            </form> 






                  </div>             
                        
        </div>
    )
}

//-----------------------------------------------------------------------------------------


// const updateNewPost=async({title,body,id})=>{
//   try{
//       const {data}=await axios.patch(`posts/${id}`,{
//            title,
//            body,
//       })
//       return data
//   }catch(error){
//      throw Error(error.response.statusText)
//   }
// }





// const cache=useQueryClient()

// const {isLoading,data:patch,mutateAsync}=useMutation('updatePost',updateNewPost,
// {
//     onSuccess:()=>{
//         cache.invadidateQueries(["post",patch.data.id])
//     }

// })








{/* <form onSubmit={async(values)=>{
  console.log(values)
  await mutateAsync({title:values.title,body:values.body,id:patch.data.id})
}}>
<label>Title:</label>   
<input type="text" name="title"  onChange={(e)=>setTitle(e.target.value)}/>
            
              
                <label>Body:</label>
             
                 <input type="text" name="body"   onChange={(e)=>setBody(e.target.value)}/>
              
          <input type="submit" name="Update" />
</form> */}