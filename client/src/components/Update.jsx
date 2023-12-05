import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => { // TO UPDATE THE STATE WITH CURRENT DB VALUES
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/products")
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <form onSubmit={updateProduct}>
            <p>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </p>
            <p>
                <label>Price: </label>
                <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default Update;  