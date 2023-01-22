import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth ,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {

            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if ( password !== confirmPassword){
            alert("Password don't mtch ") 
            return ;
        }


        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
          await  createUserProfileDocument(user,{displayName})
          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",  
          })
            
        } catch (error) {
            console.log(error);
        }

    };


    handleChange   =  (e) =>{
        const { name ,value} = e.target;
        this.setState({[name]:value})

    }




    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="tit">I dont havce accoumt </h2>
                <span>Sign up wwih email and password </span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName' value={displayName}
                        onChange={this.handleChange}
                        label='Display Name '
                        required

                    />
                    <FormInput
                        type='email'
                        name='email' value={email}
                        onChange={this.handleChange}
                        label='Display Name '
                        required

                    />
                    <FormInput
                        type='password'
                        name='password' value={password}
                        onChange={this.handleChange}
                        label='Display Name '
                        required

                    />
                    <FormInput
                        type='password'
                        name='confirmPassword' value={confirmPassword}
                        onChange={this.handleChange}
                        label='Display Name '
                        required

                    />
                    <CustomButton
                        type='submit'>
                        SIgn up
                    </CustomButton>

                </form>
            </div>
        )
    }



}


export default SignUp;