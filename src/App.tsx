import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./pages/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-up/sign-in-up.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
interface AppState {
  currentUser: any
}
interface AppProps {

}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef !== undefined) {
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id, ...snapShot.data()
              }
            });
            console.log(this.state);
          });
        };
      }
      this.setState({ currentUser: userAuth })
      // this.setState({ currentUser: user })
      // createUserProfileDocument(user);
    });
  };
  componentWillMount() {
    auth.signOut();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>)
  }
}
export default App;
