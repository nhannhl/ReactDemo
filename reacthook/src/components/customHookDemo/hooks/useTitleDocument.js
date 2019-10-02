import {useEffect} from 'react'

function useTitleDocument(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useTitleDocument
