import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const setMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', setMousePosition)

        return () => {
            console.log('Component unmouting code')
            window.removeEventListener('mousemove', setMousePosition)
        }
    }, [])
    return (
        <div>
            Xhook: {x} / Yhook: {y}
        </div>
    )
}

export default HookMouse
