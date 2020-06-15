import React from 'react';
import './sign-up.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom/button/custom-button.component';
import firebase from 'firebase';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

interface SignUpProps {

}
interface SignUpState {
    displayName?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}
export class SignUp extends React.Component<SignUpProps, SignUpState>{
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords dont match");
        }
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (err) {
            console.error(err);
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span></span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type='text' name='displayName' value={this.state.displayName} handleChange={this.handleChange} label="Display Name" required />
                    <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} handleChange={this.handleChange} label="Confirm Password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}