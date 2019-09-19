import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errMsg: ''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                this.setState({errMsg: 'Error fetch data'})
            })
            .finally(() => {
                
            });
    }

    render() {
        const { posts, errMsg } = this.state
        return (
            <div>
                List of post
                {/*{posts.length}
                {posts.map((post) => {
                    return (
                        <ul key={post.id}>
                            <li>{post.userId}</li>
                            <li>{post.title}</li>
                            <li>{post.body}</li>
                        </ul>
                    )
                })}*/}
                {posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null}
                {errMsg ? <div>{errMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
