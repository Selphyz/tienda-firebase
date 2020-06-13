import React from 'react';
import { SHOP_DATA } from './shopdata';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

interface PaginaProps {

}
interface Collection {
    collections: DatosTienda[],
}
interface DatosTienda {
    id?: number,
    title: string,
    routeName: string,
    items: Item[]
}
interface Item {
    id?: number,
    name: string
    imageUrl: string
    price: number
}


export class ShopPage extends React.Component<PaginaProps, Collection>{
    constructor(props: PaginaProps) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollections }) => (
                        <CollectionPreview key={id} {...otherCollections} />
                    ))
                }
            </div>
        )
    };
}