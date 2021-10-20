import './cart-dropdown.style.scss';
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CardItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

import { toogleCardHiddle } from '../../redux/cart/cart.action';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {

                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CardItem key={cartItem.id} item={cartItem} />
                        )) : (
                            <span className='empty-message'> Your Card is Empty . </span>
                        )
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toogleCardHiddle())

            }
            }> GO TO CHECKOUT  </CustomButton>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItem(state)
    }
};

// const mapDispatchToProps 

export default withRouter(connect(mapStateToProps)(CartDropdown));