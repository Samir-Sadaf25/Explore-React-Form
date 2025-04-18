import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <table>
                <thead >
                    <tr >
                        <th>no.</th>
                        <th>name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, idx) => <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;