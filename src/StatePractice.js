import React, { Component } from 'react';

class StatePractice extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            imageWidth: ''
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleFocus(e) {
        this.setState({
            message: 'You agree to the site terms by filling out the form'
        });
    }

    handleMouseEnter(e) {
        this.setState({
            message: ''
        });
    }

    handleLoad(e) {
        console.dir(e.target)
        if (e.target.width > 100) {
            console.log('Your Image is big~')
            this.setState({
                message: 'your image is big'
            })
        }
    }

    render() {
        return (
            <div>
                <input onFocus={this.handleFocus} />
                <h3 onMouseEnter={this.handleMouseEnter}>{this.state.message}</h3>
                <img alt={'guy'} onLoad={this.handleLoad} src={'https://udemy-images.udemy.com/course/240x135/1710182_ec9b_4.jpg'}/>
            </div>
        );
    }
}

export default StatePractice;