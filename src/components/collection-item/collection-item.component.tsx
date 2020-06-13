import React from 'react';
import './collection-item.styles.scss';

interface CollectionItemProps {
    id?: number
    name: string
    price: number
    imageUrl: string
}
export const CollectionItem = (props: CollectionItemProps) => (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
        <div className="collection-footer">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
    </div>
)