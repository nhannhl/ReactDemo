import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        console.log('component mout');
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        console.log('component unmount');
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({count: this.state.count + 1})
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>                
            </div>
        )
    }
}

export default IntervalClassCounter
