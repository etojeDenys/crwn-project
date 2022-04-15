import React from "react";
import {Link, Outlet} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {ReactComponent as Logo} from '../../assets/crown.svg'

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {auth} from "../../firebase/firebase.utils";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";


const Header = ({currentUser, hidden}) => (
    <>
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser
                        ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                        : <Link to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
        <Outlet/>
    </>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
