import React from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <div>
            use Callback hook
        </div>
    )
}

export default React.memo(Title)
