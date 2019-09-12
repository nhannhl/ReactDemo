import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Iron Man',
            age: 30,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Hulk',
            age: 29,
            skill: 'Reactjs'
        },
        {
            id: 3,
            name: 'Thor',
            age: 31,
            skill: 'Vuejs'
        },
    ];
    const personList = persons.map(person => (<Person  key={person.id} detail={person} />));
    return <div>{personList}</div>
}

export default PersonList

