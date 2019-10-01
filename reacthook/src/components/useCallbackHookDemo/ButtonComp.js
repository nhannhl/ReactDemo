import React from 'react'

function ButtonComp({handleSalary, children}) {
    console.log(`Rendering Button ${children}`)
    return (
        <div>
            <button onClick={handleSalary}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(ButtonComp)
