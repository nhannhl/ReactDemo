import React from 'react'

const ChannelContext = React.createContext()

const ChannelContextProvider = ChannelContext.Provider
const ChannelContextConsumer = ChannelContext.Consumer

export {ChannelContextProvider, ChannelContextConsumer}
export default ChannelContext