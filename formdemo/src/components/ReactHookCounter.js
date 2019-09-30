import React, { useState, useEffect } from 'react'

const ReactHookCounter = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click + {count} times</button>
            <button onClick={() => setCount(count - 1)}>click - {count} times</button>
        </div>
    )
}

export default ReactHookCounter
