import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../../custom-button/custom-button.component';
import { addItem } from '../../../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import { CartActionTypes } from '../../../../redux/cart/cart.types';
import { ShopStateItem } from '../../../../redux/shop/shop.model';

interface CollectionItemProps {
    item: ShopStateItem
    addItem?: any
}

const CollectionItem = ({ item, addItem }: CollectionItemProps) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
      </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch: (arg0: { type: CartActionTypes; payload: any; }) => any) => ({
    addItem: (item: any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);