import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    //Cach 1
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //Cach 2
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
        this.setState({
            hasError: true
        })
    }
    
    render() {
        return this.state.hasError ? <h1>Something wrong</h1> : this.props.children
    }
}

export default ErrorBoundary
