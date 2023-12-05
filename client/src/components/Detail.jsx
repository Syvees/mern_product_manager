import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom'

const Detail = (props) => {

    const [product, setProduct ] = useState({}) // PER PRODUCT ITEM
    const { removeFromDom, products, setProducts} = props; 
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id) // GET ONE
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    })

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + id) // DELETE
        .then(res => {
            navigate("/products")
            removeFromDom(id)
        })
        .catch((err) => {console.log(err)});    
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/edit/" + product._id}> Edit </Link>
            <button onClick = {e => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default Detail;