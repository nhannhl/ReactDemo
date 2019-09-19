import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Robo'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Robo'
            })
        }, 5000)
    }
    
    render() {
        console.log(`***Parent component`);
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name} />
                {/*<RegularComp name={this.state.name} />*/}
                {/*<PureComp name={this.state.name} />*/}
            </div>
        )
    }
}

export default ParentComp
