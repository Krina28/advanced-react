import React, { Component } from "react";
import Banner from './banner';
import image from '../images/bg.png';

class About extends Component {
    render() {
        return (
            // Used React Fragment when no required of any html tag
            // For more info : https://reactjs.org/docs/fragments.html
            <React.Fragment>
                <h2>About</h2>
                <Banner image={image} imageClass={'banner-logo'} />
            </React.Fragment>
        );
    }
}

export default About;
