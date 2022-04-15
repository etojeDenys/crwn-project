import React from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";

import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverview.container";
import CollectionContainer from "../Collection/Collection.container";



class Shop extends React.Component {

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props
        fetchCollectionStartAsync()
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route index element={
                        <CollectionOverviewContainer/>
                    }/>
                    <Route path={`:collectionId`} element={
                        <CollectionContainer/>
                    }/>
                </Routes>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
})

export default connect(null, mapDispatchToProps)(Shop)