import React, { Component } from 'react'
import ContextCompD from './ContextCompD'
import UserContext from './userContext'

class ContextCompC extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                <ContextCompD />
            </div>
        )
    }
}

export default ContextCompC
