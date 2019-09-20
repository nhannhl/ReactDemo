import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopicPage from './TopicPage';

class TopicsPage extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <h2>Topics page</h2>
                <Router>
                    <ul>
                        <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
                        <li><Link to={`${match.url}/components`}>Coponent</Link></li>
                        <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
                    </ul>

                    <Route path={`${match.path}/:topicId`} component={TopicPage} />
                    <Route exact path={match.path} render={() => <h3>Choose url above</h3>} />
                </Router>
            </div>
        )
    }
}

export default TopicsPage
