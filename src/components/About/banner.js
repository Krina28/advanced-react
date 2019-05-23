import React from 'react';

// Stateless component
// gets values from props and renders it. No modification
function Banner(props) {
    return (
        <div className={props.imageClass}>
            <h5 style={{ fontSize: '20px' }}>I am FullStack Developer</h5>
            <p>Let's code together!!</p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
                </p>
        </div>
    )
}

export default Banner;
