import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Redirect, Switch, Route } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/check.component';
import CollectionPage from './pages/collection/collection.component';

class App extends React.Component {
  unsusubscribleFromAuth = null;

  componentDidMount() {
    console.log('DOne ...')
    const { setCurrentUser } = this.props


    // auth.onAuthStateChanged(async user => {
    //   this.setState({ currentUser: user })
    //   console.log(user)
    this.unsusubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      // remember that  this is session based authentcation done by firebase itself  
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()

          });
          // console.log(this.state)
        })
      }
      else {
        setCurrentUser(userAuth) /// remember that 
      }
    });
  };

  componentWillUnmount() {
    this.unsusubscribleFromAuth()
  };


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/shop/:id' component={CollectionPage} />

          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });



const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

