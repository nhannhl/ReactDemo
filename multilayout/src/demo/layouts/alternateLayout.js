import React from 'react'
import Header from './header'

const alternateLayout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <p>Footer</p>
        </div>
    )
}

export default alternateLayout
