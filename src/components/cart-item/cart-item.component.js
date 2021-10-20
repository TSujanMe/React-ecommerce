import React from 'react';
import './cart-item.styles.scss';

const CardItem = ({ item:{ imageUrl,price,name,quantity } } )=>{
return (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{ name }</span>
            <span className="name"> {quantity}  X ${ price }</span>
        </div>
    </div>
    );
};


export default CardItem;