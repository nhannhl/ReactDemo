import React from 'react';

const Hello = () => {
    return (
        <div className="hlclass">
            <h3>Hello JSX</h3>
        </div>
    )
    // return React.createElement(
    //     'div',
    //     {id: 'hlid', className: 'hlclass'},
    //     React.createElement('h3', null, 'Hello JSX')
    //     );
}

export default Hello;