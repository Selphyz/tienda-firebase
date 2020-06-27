import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = (state: { shop: any; }) =>({
    isLoading: selectIsCollectionFetching(state)
});
const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
export default CollectionsOverviewContainer;