import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products") // GET ALL
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => {console.log(err)});    
    }, [])

    const deleteProduct = (productId) => { // DELETE
        axios.delete("http://localhost:8000/api/products/" + productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch((err) => {console.log(err)});    
    } 

    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}> 
                            <br/><Link to={`/products/${product._id}`}>{product.title}</Link>
                            <Link to={"/products/edit/" + product._id}> Edit </Link>
                            <button onClick = {e => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;