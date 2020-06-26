import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

interface ShopPageState {
    loading: boolean
}
interface ShopPageProps {
    match: any;
    updateCollections: any
}
const CollectionsOverviewWithSpiner = WithSpinner(CollectionsOverview);
const CollectionPageWithSìnner = WithSpinner(CollectionPage);
class ShopPage extends React.Component<ShopPageProps, ShopPageState>{
    state = {
        loading: true
    };
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshopToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        });
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpiner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSìnner isLoading={loading} {...props} />} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch: (arg0: { type: import("../../redux/shop/shop.types").default; payload: any; }) => any) => ({
    updateCollections: (collectionsMap: any) =>
        dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);