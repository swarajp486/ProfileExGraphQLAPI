import React,{useEffect,useState} from 'react'
import {useQuery,gql} from '@apollo/client'
import {Load_ONE_USERS} from '../GraphQL/Queries'
export default function SingleUser(props) {
  const [id,setId]=useState('')
  const [users,setUsers]=useState()
  const {loading, error,data}=useQuery(Load_ONE_USERS,{
        variables:{id}
  })
  useEffect(()=>{
            if(data){
            setUsers(data.profile)}
            console.log( 'fadfe',users)
    },[data])
  const hold=(e)=>{
    e.preventDefault()
    console.log("asfafgerg",users)
    props.h(users)


}
  return (
    <div className="container my-3">
            <h3>Add a Data</h3>
            <form onSubmit={(e)=>hold(e)}>
            
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">UserId</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control" id="title" aria-describedby="nameHelp" />

                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
    </div>
    
  )
}
