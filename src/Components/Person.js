import React from 'react'
const Person=({person,handleBtnClick})=>
<li key={person.name}>{person.name} {person.number}
<button onClick={handleBtnClick} >delete</button>
</li>

export default Person
