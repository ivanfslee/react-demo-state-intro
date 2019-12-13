import React, { Component } from 'react';

class SimpleEvents extends Component {
    handleClick() {
        console.log('Test');
    }
    
    handleChange() {
        console.log('user change input');
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('form submitted');
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click Me~</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        );
    }

}

export default SimpleEvents;

