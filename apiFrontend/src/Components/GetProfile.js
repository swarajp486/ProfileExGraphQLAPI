import React,{useState} from 'react'


import Person from './Person'

export default function GetProfile() {
    const [person,setPerson]=useState({})
    
    const pro=(item)=>{
        console.log('GrandParent',item)
        setPerson(item)
    }
        
   
  return (
    <>
    <Person pro={pro}/>
    <div className="container my-3">
        <ul className="list-group">
           <li className="list-group-item">
                <h6> Name -: {person.name}</h6>
                <h6>Qualification -: {person.qualification}</h6> 
                <h6>CreatedAt -: {person.createdAt}</h6>
            </li>
        </ul>
    </div>
    
    
    
    </>

  )
}

