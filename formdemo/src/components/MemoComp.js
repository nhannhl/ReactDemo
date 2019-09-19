import React from 'react'

//PureComponent for function component
function MemoComp({name}) {
    console.log('redering memo component');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)



