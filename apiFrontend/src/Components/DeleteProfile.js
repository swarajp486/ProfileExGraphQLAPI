import React,{useState} from 'react'
import {DELETE_USER_MUTATION} from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

export default function DeleteProfile() {
    const [id,setId]=useState('')
    const [deleteProfile,{data,loading,error}]=useMutation(DELETE_USER_MUTATION)
    const deleteUser=(e)=>{
        e.preventDefault()
        deleteProfile({
            variables:{
                id:id
            }
        })

        if(error){
            console.log('there is error')
        }
        if(data){
            console.log(data)
        }
    }
  return (
    <div className="container my-3">
            <h3>Add a Data</h3>
            <form onSubmit={(e)=>deleteUser(e)}>
            
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">UserId</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control" id="title" aria-describedby="nameHelp" />

                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
  )
}
