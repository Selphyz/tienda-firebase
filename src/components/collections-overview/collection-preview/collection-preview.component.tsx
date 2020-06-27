import React from 'react';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles.jsx';
import CollectionItem from './collection-item/collection-item.component';
import { ShopStateItem } from '../../../redux/shop/shop.model';
import { withRouter } from 'react-router-dom';

interface CollectionPreviewProps {
    id?: number;
    title?: string;
    routeName?: string;
    items?: (ShopStateItem)[];
    history: any;
    match: any;
}
const CollectionPreview = ({ title, items, history, match, routeName }: CollectionPreviewProps) => (
    <CollectionPreviewContainer>
        {title !== undefined ? <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer> : null}
        {items !== undefined ? <PreviewContainer>
            {items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainer> : null}
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);