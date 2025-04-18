import React from 'react';

const ProductForm = ({handleAddProduct}) => {
    
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.Quantity.value;
        const price = e.target.price.value;
        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct)
    }
    
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='name' placeholder='product name' />
                <br />
                <input type="text" name='price' placeholder='product price' />
                <br />
                <input type="text" name='Quantity' placeholder='product Quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;