import React from 'react';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.js';






















const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route  path={`${match.path}`} component={CollectionOverView} />
            {/* <Route  path='/' component={CollectionPage} /> */}
            {/* <Route path={`${match.path}/:id`} component={CollectionPage}  /> */}

        </div>
    );
};















// but this will automatically takes state in parameters 
// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });

// both of them are right
// const mapStateToProps=  state=>({
//     collections:selectCollections(state)
// })


// actually there is no need of any reducers mapStateToProps 

export default ShopPage;