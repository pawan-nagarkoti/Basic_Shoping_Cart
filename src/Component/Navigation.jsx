import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const cartItem = useSelector((state) => state.cart.cartContainer)
    return (
        <>
            <nav style={{
                border: '1px solid black',
                position: 'sticky',
                top: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99,
                backgroundColor: 'pink',
                height: '48px'
            }}>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
                    <li style={{ cursor: 'pointer' }}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        <Link to='/Cart'>Cart</Link>
                    </li>
                    <li style={{ cursor: 'pointer' }}>Cart Item <span>{cartItem.length}</span></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation