import React, { Component } from 'react';

class NameContainer extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name=> <div>
                    {name}
                </div>)}
            </div>
        );
    }
}

export default NameContainer;