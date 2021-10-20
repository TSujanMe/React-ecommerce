import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './card-icon.style.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toogleCardHiddle } from '../../redux/cart/cart.action';


const CardIcon = ({ toogleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    
       itemCount: selectCartItemsCount
});


const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCardHiddle())
});




export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);