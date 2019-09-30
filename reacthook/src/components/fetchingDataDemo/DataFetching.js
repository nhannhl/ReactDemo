import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={event => setId(event.target.value)} />
            <button onClick={handleClick}>Fetch</button>
            <div>{JSON.stringify(post)}</div>
            {/*<ul>
                {posts.map(post => <li key={post.id}>{JSON.stringify(post)}</li>)}
            </ul>*/}
        </div>
    )

}

export default DataFetching
