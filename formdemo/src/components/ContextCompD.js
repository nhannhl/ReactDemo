import React, { Component } from 'react'
import ContextCompE from './ContextCompE'
import UserContext from './userContext'

class ContextCompD extends Component {
    static contextType = UserContext

    render() {
        return (
            <div>
                Component D context {this.context.nameA}
                <ContextCompE />
            </div>
        )
    }
}

export default ContextCompD
