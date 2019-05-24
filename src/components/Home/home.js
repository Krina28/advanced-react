import React, { Component } from "react";
import Counter from './counter';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Home</h2>
                <Counter />
            </React.Fragment>
        );
    }
}

export default Home;
