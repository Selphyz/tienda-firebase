import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collections-overview/collection-preview/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import { ShopStateItem } from '../../redux/shop/shop.model';

const CollectionPage = ({ collection }: any) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item: ShopStateItem) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: { shop: any; }, ownProps: { match: { params: { collectionId: React.ReactText; }; }; }) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);