import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        //4.final short operator
        return (this.state.isLoggedIn && <div>isLoggedIn</div>) || <div>isNotLoggedIn</div>

        //3.conditional operator
        // return this.state.isLoggedIn ? (<div>isLoggedIn</div>) : (<div>isNotLoggedIn</div>)

        //2.variable approach
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>isLoggedIn</div>
        // }else{
        //     message = <div>isNotLoggedIn</div>
        // }
        // return message

        //1.if/else approach
        // if(this.state.isLoggedIn) {
        //     return <div>isLoggedIn</div>
        // }else{
        //     return <div>isNotLoggedIn</div>
        // }
    }
}

export default UserGreeting
