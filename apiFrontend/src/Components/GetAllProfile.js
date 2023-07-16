import React,{useEffect,useState} from 'react'
import {useQuery,gql} from '@apollo/client'
import {Load_Users} from '../GraphQL/Queries'
function GetAllProfile() {
    const {error,loading,data}=useQuery(Load_Users)
    const [users,setUsers]=useState([])

    useEffect(()=>{
        if(data){
        setUsers(data.getProfile)}
        console.log(data)
    },[data])


  return (
    <div className="container my-3">
    <ul className="list-group">
        {users.map((item)=>{
         
          return <li className="list-group-item">
          <h6> Name -: {item.name}</h6>
          <h6>Qualification -: {item.qualification}</h6> 
          <h6>CreatedAt -: {item.createdAt}</h6>
          </li>
          
          
            
        })}
        
    </ul>
  </div>
  )
}

export default GetAllProfile