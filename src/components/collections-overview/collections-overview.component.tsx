import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionPreview from './collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }: any) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }: any) => (
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))}
    </div>
);
const mapStateToProps = (state: { shop: any; }) => ({
    collections: selectCollectionsForPreview(state)
});
export default connect(mapStateToProps)(CollectionsOverview);