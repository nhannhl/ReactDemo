import React from 'react'
import { UserContext } from '../../App'
import { ChannelContextConsumer } from './ChannelContext'

function CompContextE() {
    return (
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContextConsumer>
                            {
                                channel => {
                                    return <div>{user} / {channel} - CompContextE</div>
                                }
                            }
                        </ChannelContextConsumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default CompContextE
