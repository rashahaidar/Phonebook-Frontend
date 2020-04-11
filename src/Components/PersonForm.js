import React,{useState} from 'react'
import personService from '../services/persons'
//import Persons from './Persons'
const PersonForm=({persons,setPersons,setResultToShow,setMessage})=>{
    const[newName,setNewName]=useState('')
    const[newNumber,setNewNumber]=useState('')
    const nameFound=persons.find(p=>p.name.toUpperCase()===newName.toUpperCase())
    const addPerson=(event)=>{
        if(newName!==""){
        event.preventDefault()
        if (nameFound){
           if(window.confirm(newName+ ' is already added to phonebook,replace the old number with a new one?'))
           {
               const person=persons.find(p=>p.name.toUpperCase()===newName.toUpperCase())
               const changedPerson={...person,number:newNumber}
               personService.update(person.id,changedPerson)
               .then(returnedPerson=>setPersons(persons.map(p=>p.name.toUpperCase()!==newName.toUpperCase()? p:returnedPerson)))
               .then(()=>{setMessage(`Number is changed for ${newName}`)
               setNewNumber('')
               setNewName('')
               setTimeout(() => {
                   setMessage(null)
                   setNewName('')
                   setNewNumber('')
               },5000);
            })
               .catch(error =>{setMessage(`${newName} was already deleted from server`)
               persons.filter(p=>p.id!==person.id)
                setTimeout(() => {
                    setMessage(null)
                }, 5000);
               })

               
           }
        }
        else{
        
        const obj={
            name:newName,
            number:newNumber
         }
         personService.create(obj)
         .then(returnedPerson=>{
             setPersons(persons.concat(returnedPerson))
             setNewName('')
             setNewNumber('')
         })
         .then(()=>{setMessage(`Added ${newName}`)
         setTimeout(() => {
             setMessage(null)
         }, 5000);
        })
         .catch(error=>{console.log('fail to add a new person')
         setMessage(`fail to add ${newName}`)
         setTimeout(() => {
             setMessage(null)
         }, 5000);
    })
        //setPersons(persons.concat(obj))
        //setResultToShow(persons.concat(obj))
       // setNewName('')
        }
    }
    }
    const handleNameChange=(event)=>{
        setNewName(event.target.value)
    }
    const handleNumberChange=e=>setNewNumber(e.target.value)
return(
    <div>
        <form onSubmit={addPerson}>
            <div>name:<input value={newName} onChange={handleNameChange}></input></div>
            <div>number:<input value={newNumber} onChange={handleNumberChange}></input></div>
            <div><button type="submit">add</button></div>
        </form>
    </div>
)
}
export default PersonForm