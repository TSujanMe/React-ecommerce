import React from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

    };


    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = event.target;


        try {
            await  auth.signInWithEmailAndPassword(email,password)
        } catch (error) {
            console.log(error)
            
        }
        this.setState({ email: '', password: '' });
    };



    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };


    render() {
        return (
            <div className="sign-in">
                <h2 className=''> I already have an Account </h2>
                <span className="">Sign in with your Email and Password </span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'   > Sign in   </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google   </CustomButton>
                    </div>
                </form>
            </div>
        );
    };
};

export default SignIn;


