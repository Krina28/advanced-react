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

    render() {
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
