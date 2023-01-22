import React from 'react';
import './collection-overview.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection.preview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverView = ({ collection, match }) => {
    console.log(collection)
    
    return (
        <div className="collections-overview">
            {
                collection.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview

});


export default connect(mapStateToProps)(CollectionOverView);