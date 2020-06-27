import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = (state: any) => ({
    isLoading: (state: { shop: any; }) => selectIsCollectionsLoaded(state)
});
const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));
export default CollectionPageContainer;