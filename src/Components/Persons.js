import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons=({persons,setPersons})=>{
    const handleBtnClick=(id,name)=>{
        if(window.confirm(`Delete ${name} ?`)){
        setPersons(persons.filter(n=>n.id!==id))
        personService.deletePerson(id)
        .catch(error=>console.log('Fail to delete'))
        }
       
        
    }
    return(
        <ul>
            {persons.map((p,i)=><Person key={i} person={p} handleBtnClick={()=>handleBtnClick(p.id,p.name)}/>)}
        </ul>
    )
}
export default Persons