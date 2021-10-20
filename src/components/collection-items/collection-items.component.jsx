import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.style.scss';
import { addItem } from '../../redux/cart/cart.action';



const CollectionItem = ({ addItem, item }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Card </CustomButton>
        </div>

    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}


export default connect(null, mapDispatchToProps)(CollectionItem);
