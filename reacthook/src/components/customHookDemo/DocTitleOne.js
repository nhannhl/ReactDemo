import React, {useState} from 'react'
import useTitleDocument from './hooks/useTitleDocument'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    useTitleDocument(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>ClickOne - {count}</button>
        </div>
    )
}

export default DocTitleOne
