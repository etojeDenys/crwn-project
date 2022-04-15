import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {CollectionPreview} from "../CollectionPreview/CollectionPreview";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import './collection-overview.styles.scss'


const CollectionOverview = ({collection}) => (
    <div className='collections-overview'>
        {
            collection.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)