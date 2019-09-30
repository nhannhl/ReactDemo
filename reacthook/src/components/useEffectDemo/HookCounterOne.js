import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect - update document title')
        document.title = `Clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} 
                    onChange={event => setName(event.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
