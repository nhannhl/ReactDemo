import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    //Mouting
    //1.Initialization state and props - constructor method
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'roboA'
        }
        console.log(`LifecycleA constructor`);
    }

    //2.getDerivedStateFromProps method 1.Updating
    //two parameter props, state -> return new State or null
    static getDerivedStateFromProps(props, state) {
        console.log(`LifecycleA getDerivedStateFromProps`)
        return null;
    }

    //4.render didmount
    componentDidMount() {
        console.log(`LifecycleA componentDidMount`)
    }

    //2.Updating
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    
    //3.Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifecycleA getSnapshotBeforeUpdate`)
        return null;
    }

    //4.Updating
    componentDidUpdate() {
        console.log(`LifecycleA componentDidUpdate`)
    }

    changeState = () => {
        this.setState({
            name: 'roboA changeState'
        })
        // console.log('here set state')
    }

    //3.render method
    render() {
        console.log(`LifecycleA render`)
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB name={this.state.name}/>
            </div>
        )
    }
}

export default LifecycleA
