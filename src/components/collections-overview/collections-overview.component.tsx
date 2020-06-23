import React from 'react';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Shop } from '../../redux/shop/shop.model';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }: Shop) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector<any, any>({
    collections: selectCollections
});
export default connect(mapStateToProps)(CollectionsOverview);