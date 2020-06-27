import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from './collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collection-overview.styles';

interface CollectionsOverviewProps {
    collections: any;
}
const CollectionsOverview = ({ collections }: CollectionsOverviewProps) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }: any) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector<any, any>({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);