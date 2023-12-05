import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = e => {
        e.preventDefault();
        // MAKE A POST REQUEST TO CREATE A NEW PRODUCT -- CREATE
        axios.post("http://localhost:8000/api/products", {
            title, // SHORTCUT FOR title: title
            price,
            description
        })
        .then(res => {
            console.log(res.data)
            console.log(res);
            setProducts([...products, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" value={title} onChange = {e => setTitle(e.target.value)}></input>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" value={price} onChange = {e => setPrice(e.target.value)}></input>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" value={description} onChange = {e => setDescription(e.target.value)}></input>
            </p>
            <input type="submit"></input>
        </form>
    )
}

export default ProductForm;