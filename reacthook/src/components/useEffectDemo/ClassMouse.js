import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }

    setMousePosition = (event) => {
        this.setState({x: event.clientX, y:event.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.setMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.setMousePosition)
    }
    
    render() {
        return (
            <div>
                X: {this.state.x} / Y: {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
