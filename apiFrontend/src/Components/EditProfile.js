import React,{useState} from 'react'
import {EDIT_USER_MUTATION} from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

function EditProfile() {
    const [name,setName]=useState('')
    const [qualification,setQualification]=useState('')
    const [id,setId]=useState('')
    const [status,setStatus]=useState('')
    const [editProfile,{data,loading,error}]=useMutation(EDIT_USER_MUTATION)
    
    const modifiedData=(e)=>{
        e.preventDefault()
        console.log('form restart')
        console.log(name,qualification,id)
        editProfile({
            variables:{
                id:id,
                name:name,
                qualification: qualification
            }
        })
        console.log(data)
        setStatus(data)
        console.log('test',status)
        console.log('test',data,loading,error)
        
    }
    
    


  return (
    <>
    <div className="container my-3">
    <h3>Add a Modified Data</h3>
    <form onSubmit={(e)=>modifiedData(e)}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">UserId</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control" id="title" aria-describedby="nameHelp" />

        </div>
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
</>
  )
}

export default EditProfile