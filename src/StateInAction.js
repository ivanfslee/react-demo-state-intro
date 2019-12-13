import React, { Component } from 'react';

class StateInAction extends Component {
    constructor() {
        super();
        this.state = {
            text: "State in Action"
        }
        
        setTimeout(() => { //must use arrow function here in order to not rebind 'this'. regular function() definition will not work
            this.setState({
                text: "State changed!"
            })
        }, 2000);
    }

    render() {
        return (
            <h2>{this.state.text} - {this.props.name}</h2>
        );
    }
}

export default StateInAction; 