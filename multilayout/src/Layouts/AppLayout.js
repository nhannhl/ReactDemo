import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const AppLayout = ({ children }) => {
    return (                       
    <div>
      <p>App Layout</p>
      <br/>
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/user'}>User</Link></li>
      </ul>
      {children}                                          
    </div>           
  )};

export default AppLayout
