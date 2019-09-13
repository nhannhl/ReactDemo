import React, { Component } from 'react'

class LifecycleB extends Component {
    //Component Mouting
    //1.Initialization state and props - constructor method
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'roboB'
        }
        console.log(`LifecycleB constructor`);
    }

    //2.getDerivedStateFromProps method / this is method for Mouting and Updating
    //two parameter props, state -> return new State or null
    static getDerivedStateFromProps(props, state) {
        console.log(`LifecycleB getDerivedStateFromProps`)
        return null;
    }

    componentDidMount() {
        console.log(`LifecycleB componentDidMount`)
    }

    //2.Updating
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    
    //3.Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifecycleB getSnapshotBeforeUpdate`)
        return null
    }

    //4.Updating
    componentDidUpdate() {
        console.log(`LifecycleB componentDidUpdate`)
    }
    
    //3.render method
    render() {
        console.log(`LifecycleB render`)
        return (
            <div>Lifecycle B</div>
        )
    }
}

export default LifecycleB
