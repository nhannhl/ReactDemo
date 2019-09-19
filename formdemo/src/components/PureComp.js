import React, { PureComponent } from 'react'

//Purecomponent for class component
class PureComp extends PureComponent {
    render() {
        console.log(`Pure component`);
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
