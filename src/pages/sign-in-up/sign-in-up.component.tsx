import React from 'react';
import './sign-in-up.styles.scss';
import { SignIn } from '../../components/auth/sign-in/sign-in.component';
import { SignUp } from '../../components/auth/sign-up/sign-up.component';

export const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);