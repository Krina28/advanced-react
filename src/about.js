import React ,{Component} from "react";
import Banner from './banner';
import image from './logo.svg';

class About extends Component{
    render(){
        return (
            <React.Fragment>
              <h2>About</h2>
              <Banner image={image} imageClass={'banner-logo'}/>     
            </React.Fragment>
          );
    } 
}

export default About;
