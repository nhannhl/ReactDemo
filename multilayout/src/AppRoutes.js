import React from 'react'
import {BrowserRouter as Route, Link } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'

export default function AppRoutes({component: Component, ...rest}) {
    return (
        <div>
            <Route {...rest} component={props => (
                        <AppLayout>
                        <Component {...props} />
                        </AppLayout>
                    )} />
            <AppLayout>
                <Component />
            </AppLayout>
        </div>
    )
}


// const AppRoutes = ({component: Component, ...rest}) => {
//       console.log(Component);
//     return (
//       <Route {...rest} render={matchProps => (
//         <AppLayout>
//           <Component {...matchProps} />
//         </AppLayout>
//       )} />
//     )
//   };

// export default AppRoutes
