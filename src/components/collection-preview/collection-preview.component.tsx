import React from 'react';
import './collection-preview.scss';
import { CollectionItem } from '../collection-item/collection-item.component';

interface DatosTienda {
    id?: number,
    title: string,
    routeName: string,
    items: Item[]
}
interface Item {
    id?: number
    name: string
    imageUrl: string
    price: number
}

export const CollectionPreview = (props: DatosTienda) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {props.items.filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
)
