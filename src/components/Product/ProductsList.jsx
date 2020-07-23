import React from 'react';
import withAppContext from '../../withAppContext';

const initialList = [];

const ProductsList = () => {
    const [products, setProductsList] = React.useState(initialList);

    return (
        <div>
            <ul>
                {products.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default withAppContext(ProductsList);
