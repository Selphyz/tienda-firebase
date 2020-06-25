import React from 'react';
import './menu-item.styles.scss';
interface MenuProps {
    title: string;
    imageUrl: string,
    size?: string,
    linkUrl: string
}

export const MenuItem = (props: MenuProps) => (
    <div className={`${props.size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${props.imageUrl})`
        }}>
        </div>
        <div className="content">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <span className="subtitle">Comprar</span>
        </div>
    </div>
);