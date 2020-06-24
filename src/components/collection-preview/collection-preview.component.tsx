import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { ShopItem } from '../../redux/shop/shop.model';

interface DatosTienda {
    id?: number,
    title: string,
    routeName: string,
    items: ShopItem[]
}

const CollectionPreview = (props: DatosTienda) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {props.items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)
export default CollectionPreview