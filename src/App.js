import React,{useState,useEffect} from 'react';
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import personService from './services/persons'
import Notification from './Components/Notification'

const App=()=> {
  const[persons,setPersons]=useState([])
  const[filterName,setFilterName]=useState('')
  const[errorMessage,setErrorMessage]=useState('')
  const resultToShow=filterName===''?persons:persons.filter(x=>x.name.toUpperCase().startsWith(filterName.toUpperCase()))
//const[resultToShow,setResultToShow]=useState(persons)
 useEffect(()=>{
 personService.getAll()
 .then(inintialPersons=>setPersons(inintialPersons))
//axios.get("http://localhost:3004/persons")
//.then(r=>setPersons(r.data))
 },[])

 return(
   <div>
     <h2>Phonebook</h2>
     <Notification message={errorMessage}/>
     <Filter setFilterName={setFilterName} filterName={filterName}/>
     {/* <Filter setResultToShow={setResultToShow} persons={persons}></Filter> */}
     <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setErrorMessage} ></PersonForm> 
      {/* setResultToShow={setResultToShow} */}
     <h3>Numbers</h3>
     {/* {console.log("Persons",resultToShow)} */}
     <Persons persons={resultToShow} setPersons={setPersons}></Persons>
   </div>
 )
}

export default App;
