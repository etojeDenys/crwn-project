import React from "react";
import {connect} from "react-redux";

import {addCart} from "../../redux/cart/cart.actions";

import {
    CollectionButtonContainer,
    CollectionFooterContainer,
    CollectionItemContainer,
    CollectionItemImageContainer,
    CollectionNameContainer,
    CollectionPriceContainer
} from "./collection-item.styles";

const CollectionItem = ({item, addCart}) => {
    const {name, price, imageUrl} = item
    return (
        <CollectionItemContainer>
            <CollectionItemImageContainer imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <CollectionNameContainer>{name}</CollectionNameContainer>
                <CollectionPriceContainer>{price}</CollectionPriceContainer>
            </CollectionFooterContainer>
            <CollectionButtonContainer inverted onClick={() => addCart(item)}>Add to cart</CollectionButtonContainer>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addCart: item => dispatch(addCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)