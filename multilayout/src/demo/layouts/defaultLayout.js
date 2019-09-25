import React from 'react'
import Footer from './footer'
import Header from './header'

const defaultLayout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default defaultLayout
