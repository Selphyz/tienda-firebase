import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./pages/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-up/sign-in-up.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument, addCollectionAddDocuments } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

interface AppState {
}
interface AppProps {
  setCurrentUser: any,
  currentUser?: any,
  collectionsArray: any
}
class App extends React.Component<AppProps, AppState> {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef !== undefined) {
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
      }
      setCurrentUser(userAuth);
      addCollectionAddDocuments('collections', this.props.collectionsArray)
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state: { user: import("./redux/user/user.model").UserStateModel; }) => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: selectCollectionsForPreview(state)
});
const mapDispatchToProps = (dispatch: (arg0: { type: import("./redux/user/user.types").UserActionTypes; payload: any; }) => any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
