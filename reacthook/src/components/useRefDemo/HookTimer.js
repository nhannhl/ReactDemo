import React, {useEffect, useState, useRef} from 'react'

function HookTimer() {
    
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    // const [interval, setClearInterval] = useState(null)
    
    useEffect(() => {        
        intervalRef.current = setInterval(() => setTimer(prevState => prevState + 1), 1000)
        // setClearInterval(setInterval(() => setTimer(prevState => prevState + 1), 1000))

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    
    return (
        <div>
            <h3>Timer - {timer}</h3>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default HookTimer
