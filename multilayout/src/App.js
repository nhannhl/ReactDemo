import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from './demo/routes'

function NoMatch({ location }) {
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={(props) => {
                                    return (
                                        <route.layout {...props}>
                                            <route.component {...props} />
                                        </route.layout>
                                    )
                                }}
                            />
                        )
                    })}
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;