import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setErrorMsg('')
                setPost(response.data)
            })
            .catch(error => {
                setLoading(false)
                setErrorMsg('Something wrong!')
                setPost({})
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {errorMsg ? errorMsg : null}
        </div>
    )
}

export default DataFetchingOne
