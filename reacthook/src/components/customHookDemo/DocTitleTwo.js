import React, {useState} from 'react'
import useTitleDocument from './hooks/useTitleDocument'

function DocTitleTwo() {
    const [count, setCount] = useState(0)
    useTitleDocument(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>ClickTwo - {count}</button>
        </div>
    )
}

export default DocTitleTwo
