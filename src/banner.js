import React from 'react';

function Banner(props){
    console.log('props',props)
    return(
        <img src={props.image} alt="banner"/>
    )
}

export default Banner;