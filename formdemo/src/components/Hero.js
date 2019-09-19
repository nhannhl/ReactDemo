import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Thanos') {
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
