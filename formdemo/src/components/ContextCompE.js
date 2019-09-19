import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ContextCompE extends Component {
    render() {
        return (
            <UserConsumer>
                {(userName) => {
                    return <div>{userName.nameA}</div>
                }}
            </UserConsumer>
        )
    }
}

export default ContextCompE
