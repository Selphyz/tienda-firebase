import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/computer_desktop_icon.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

// type User = any;
interface HeaderProps {
    currentUser: any
}
export const Header = ({ currentUser }: HeaderProps) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SING IN</Link>
            }
        </div>
    </div>
)