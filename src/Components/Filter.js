import React from 'react'
const Filter=({setFilterName,filterName})=>{
//const[filterName,setFilterName]=useState('')
//const resultToShow=filterName ==='' ? persons:persons.filter(x=>x.name.toUpperCase().startsWith(filterName.toUpperCase()))
//console.log('result',resultToShow)
const handleFilterChange=(event)=>{
    setFilterName(event.target.value)
    //setResultToShow(resultToShow)
}
return(
    <div>
       filter shown with <input value={filterName} onChange={handleFilterChange}></input>
    </div>
)
}
export default Filter