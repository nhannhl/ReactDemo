import React from 'react'

function Person(props) {
    return <h2>Name: {props.detail.name}/Age:{props.detail.age}/Skill:{props.detail.skill}</h2>
}

export default Person
