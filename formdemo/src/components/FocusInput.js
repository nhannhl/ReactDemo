import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.InputCompRef = React.createRef()
    
        this.state = {
             
        }
    }

    clickHandler = () => {
        this.InputCompRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.InputCompRef}/>
                <button onClick={this.clickHandler}>Click focus</button>
            </div>
        )
    }
}

export default FocusInput
