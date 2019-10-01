import React from 'react'

function CountComp({valueNumber, text}) {
    console.log(`Rendering Value ${text}`)
    return (
        <div>
            <h4>{text}: {valueNumber}</h4>
        </div>
    )
}

export default React.memo(CountComp)
