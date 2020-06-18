import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/computer_desktop_icon.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
// type User = any;
interface HeaderProps {
  currentUser: any;
  hidden: boolean
}
const Header = ({ currentUser, hidden }: HeaderProps): JSX.Element => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (<Link className="option" to="/signin">SING IN</Link>)}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropDown />
    }
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }: any) => ({
  currentUser,
  hidden
})
export default connect(mapStateToProps)(Header);
