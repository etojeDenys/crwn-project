import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectItemCount} from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss'
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

