import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Features/cartSlice';

const CartList = () => {
    const cartData = useSelector((state) => state.cart.cartContainer || []);
    const dispatch = useDispatch();
    const itemRemove = (id)=>{
        dispatch(remove(id))
    }
    return (
        <>
            <div>
                {
                    cartData.map(({image,price,title,id},index) => {
                        return(
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'space-evenly' }} key={index}>
                                <img src={image} width='100' height='100' />
                                <span>{title.slice(0,10)}</span>
                                <span>{price}</span>
                                <button onClick={()=>itemRemove(id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CartList