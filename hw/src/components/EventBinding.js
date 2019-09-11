import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // cach thu 3
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: `hihi`
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: `hihi`
        });
    }
    
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
            {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
            {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
