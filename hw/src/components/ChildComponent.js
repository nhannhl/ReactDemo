import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('ChildComponent.js')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent

