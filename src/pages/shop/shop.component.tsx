import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

interface ShopPageProps {
    match: any;
    updateCollections: any
}
class ShopPage extends React.Component<ShopPageProps>{
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshopToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);
        });
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch: (arg0: { type: import("../../redux/shop/shop.types").default; payload: any; }) => any) => ({
    updateCollections: (collectionsMap: any) =>
        dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);