import React, { Component } from 'react'

class TopicPage extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
            <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}

export default TopicPage
