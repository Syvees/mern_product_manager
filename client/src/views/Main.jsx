import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
    <div>
        <ProductForm products={products} setProducts={setProducts} />
        <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
    </div>
    )
}


export default Main;