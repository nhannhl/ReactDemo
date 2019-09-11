import React from 'react';

// function Greet() {
//     return <h3>reactjs</h3>
// }

// export const Greet = () => <h3>reactjs</h3>; //must be use: import { Greet } from './components/Greet';

const Greet = (props) => {
    return (
        <div>
            <h3>hello {props.name} a.k.a {props.heroName}</h3>
            {props.children}
        </div>
    );
}

export default Greet;