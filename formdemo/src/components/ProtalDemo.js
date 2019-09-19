import React from 'react'
import ReactDOM from 'react-dom'

function ProtalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal demo</h1>
        </div>,
        document.getElementById('protal-root')
    )
}

export default ProtalDemo
