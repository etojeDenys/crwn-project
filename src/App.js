import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {Homepage} from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";
import {auth, createUserprofileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/Checkout/Checkout";


import './App.css';


class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserprofileDocument(user)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),

                    })
                })
            }

            setCurrentUser(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path='/signin'
                               element={this.props.currentUser ? <Navigate replace to='/'/> : <SignInAndSignUp/>}/>
                        <Route path='/shop/*' element={<Shop/>}/>
                        <Route path='/checkout' element={<CheckoutPage/>}/>
                    </Route>
                </Routes>
            </div>
        )
    };
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
