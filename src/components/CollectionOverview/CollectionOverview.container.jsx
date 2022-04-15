import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import WithSpinner from "../withSpinner/withSpinner";
import CollectionOverview from "./CollectionOverview";


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer