import React, { Component } from 'react';

class EventAndState extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick = () => {
        this.setState({
            inputText: ''
        })
    }
    
    handleChange = (event) => {
        // console.dir(event.target);
        this.setState({
            inputText: event.target.value
        })
        console.log(this.state.inputText);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            inputText: 'State is working'
        })
        console.log('form submitted');
    }

    render() {
        return (
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click Me~</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        );
    }
}

export default EventAndState;

