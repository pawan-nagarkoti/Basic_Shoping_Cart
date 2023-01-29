import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';

const Cart = () => {
    const [product, setProduct] = useState('');
    const dispatch = useDispatch();
    const responseProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProduct(response.data)
    }
    useEffect(() => {
        responseProduct();
    }, []);

    if (!product) return <p style={{ textAlign: 'center' }}>Loading...</p>

    const addItem = (image, title, price, id)=>{
        dispatch(addToCart({image, title, price, id}))
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {
                    product.map(({ image, category, description, title, price ,id}, index) => {
                        return (
                            <div key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={image} className="card-img-top" alt={title} width='200px' height='200px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{title.slice(0, 15)}</h5>
                                        <p className="card-text">{description.slice(0, 50)}...</p>
                                        <p>Price: ${price}</p>
                                        <button className="btn btn-primary" onClick={()=> addItem(image, title, price,id)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart