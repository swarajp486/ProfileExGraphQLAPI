import React,{useState} from 'react'
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client'
function CreateProfile() {
    const [name,setName]=useState('')
    const [qualification,setQualification]=useState('')

    const [createProfile,{data,loading,error}]=useMutation(CREATE_USER_MUTATION)
    const addUser=(e)=>{
        e.preventDefault()
        createProfile({
            variables:{
                name:name,
                qualification: qualification
            }
        })

        if(loading){
            console.log('loading happinig')
        }
        if(error){
            console.log('there is error')
        }
        if(data){
            console.log('done create',data)
        }
    }
  return (
    <div className="container my-3">
            <h3>Add a Data</h3>
            <form onSubmit={(e)=>addUser(e)}>
            
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="title" aria-describedby="nameHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} className="form-control" id="qualification" aria-describedby="qualificationHelp" />

                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
  )
}

export default CreateProfile