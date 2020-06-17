import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import Header from "./pages/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-up/sign-in-up.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

interface AppState {
}
interface AppProps {
  setCurrentUser: any
  currentUser?: any
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
            console.log(snapShot.data());
            console.log(snapShot.id);

          });
        }
      }
      setCurrentUser(userAuth);
      // createUserProfileDocument(user);
    });
  }
  componentWillMount() {
    auth.signOut();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }: any) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
