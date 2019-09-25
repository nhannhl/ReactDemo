import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import routes from '../routes'

class header extends Component {
    render() {
        return (
            <div>
                <ul>
                {routes.map((route, index) => {
                    return (
                        <li key={index}><Link to={route.path}>{route.name}</Link></li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default header
