import React, { useRef } from 'react'
import { SignIn } from './Auth';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const emailVal = useRef();
    const passVal = useRef();
    const navigate = useNavigate();

    const handleSignUp = (event)=>{
        event.preventDefault();

        let email = emailVal.current.value;
        let password = passVal.current.value;

        emailVal.current.value = "";
        passVal.current.value = "";

        console.log(email,password);

        SignIn(email,password)
        .then(res=>{
            console.log(res)
            navigate("/login");
        })
        .catch(err=>console.log(err));
    }
    return (

        <form>
            <label htmlFor='email'>
                Enter Email:
                <input type="email" id='email' placeholder='Enter Email' ref={emailVal} required />
            </label>
            <br /><br />
            <label htmlFor='password'>
                Enter Password:
                <input type="password" id='password' placeholder='Enter Password' ref={passVal} required />
            </label>
            <br /><br />
            <button onClick={handleSignUp}>SignUp</button>
        </form>
    )
}

export default SignUp