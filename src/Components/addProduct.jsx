import React from 'react';

const addProduct = () => {
    return (
        <div>
            <h2>Add A Product</h2>
            <label htmlFor="name">Product Name</label><input type="text" name='name'/>
        </div>
    );
};

export default addProduct;