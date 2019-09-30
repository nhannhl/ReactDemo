import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <input type='text' 
                value={name.firstName} 
                onChange={event => setName({...name, firstName : event.target.value})} 
            />
            <input type='text' 
                value={name.lastName} 
                onChange={e => setName({...name, lastName : e.target.value})} 
            />
            <h3>Your firstName is {name.firstName}</h3>
            <h3>Your lastName is {name.lastName}</h3>
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default HookCounterThree
