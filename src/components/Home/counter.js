import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

//Statefull component
class Counter extends Component {
    constructor(props) {
        super(props);
        // Set-up our initial state
        this.state = {
            counter: 0
        };
    }

    //event handling
    _incrementCounter = () => {
        //increment counter value and update the counter state
        this.setState({ counter: this.state.counter + 1 }, () => {
            // callback function of setState
        })
    }

    componentDidUpdate = (state, props) => {
        console.log('componentDidUpdate', state, props)
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate = () => {
        if (this.state.counter == 2) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        console.log('render')
        // We can access the counter property through this.state
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this._incrementCounter}> Increment </Button><br />
                Counter is {this.state.counter}
            </div>
        );
    }
}

export default Counter;
