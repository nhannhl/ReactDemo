import React, { Component } from 'react'

class Form extends Component {
    optionList = ['angular', 'reactjs', 'vuejs'];

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             skill: this.optionList[0]
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    handleSkillChange = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(`${this.state.username},${this.state.comment},${this.state.skill}`);
        event.preventDefault();
    }
    
    render() {
        const {username, comment, skill} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username </label>
                    <input type='text' value={username} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <select value={skill} onChange={this.handleSkillChange}>
                        {this.optionList.map(option => <option value={option} key={option}>{option.toString().replace(/^./, option.charAt(0).toUpperCase())}</option>)}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
