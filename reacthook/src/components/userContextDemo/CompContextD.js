import React, {useContext} from 'react'
import CompContextE from './CompContextE'
import { UserContext } from '../../App'
import ChannelContext from './ChannelContext'

function CompContextD() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} / {channel} - CompContextD
            <CompContextE />
        </div>
    )
}

export default CompContextD
