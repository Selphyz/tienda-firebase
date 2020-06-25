import React from 'react';
import './sign-in.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../../firebase/firebase.utils';
interface SignInProps {

}
interface SignInState {
    email?: string,
    password?: string
}
export class SignIn extends React.Component<SignInProps, SignInState>{
    constructor(props: SignInProps) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            if (email !== undefined && password !== undefined) {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({ email: '', password: '' });
            }
        } catch (e) {
            console.log(e);
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email}
                        handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="password" value={this.state.password}
                        handleChange={this.handleChange} label="password" required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton isgooglesignin onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
