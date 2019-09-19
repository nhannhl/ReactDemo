import React from 'react'

const UserContext = React.createContext({nameA: 'abc', nameB: 'cde'})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext