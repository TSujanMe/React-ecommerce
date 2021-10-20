import React from 'react';
import { connect } from 'react-redux';
import StripeCheckOutButton from '../../components/stripe-button/stripe-button.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkout-item/check-item.component';
import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <StripeCheckOutButton price = {total} /> 
      </div>

    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);