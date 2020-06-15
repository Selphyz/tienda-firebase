import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./pages/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-up/sign-in-up.component";
import { auth } from './firebase/firebase.utils'
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
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
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
