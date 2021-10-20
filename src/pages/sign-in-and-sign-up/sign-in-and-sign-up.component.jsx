import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.scss';


const SignInAndSignUpPage = () =>{
    console.log('THis is all')
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage;