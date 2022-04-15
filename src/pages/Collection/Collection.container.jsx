import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import WithSpinner from "../../components/withSpinner/withSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainer