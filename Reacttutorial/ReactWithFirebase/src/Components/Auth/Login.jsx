import React, { useRef, useState } from 'react'
import { LoginIn, logInWithGoogle, sendOtp, verifyOtp } from './Auth';
import { useNavigate } from 'react-router-dom';

function Login() {

    const emailVal = useRef();
    const passVal = useRef();
    const phoneVal = useRef();
    const optVal = useRef();
    const navigate = useNavigate();
    const [isOpt,setIsOpt] = useState(0);

    const handleSignUp = (event)=>{
        event.preventDefault();

        let email = emailVal.current.value;
        let password = passVal.current.value;

        emailVal.current.value = "";
        passVal.current.value = "";

        console.log(email,password);

        LoginIn(email,password)
        .then(res=>{
            console.log(res);
            navigate("/dashboard");
        })
        .catch(err=>console.log(err.message));
    }

    const googleLogIn = ()=>{
       logInWithGoogle()
       .then(res=>{
        console.log(res);
        navigate("/dashboard");})
        .catch(err=>console.log(err.message));
    }

    const otpFunc = ()=>{
        let phone = phoneVal.current.value;
        console.log(phone);
        phoneVal.current.value="";
        sendOtp(phone).then(res=>{
            console.log(res);
            console.log("sending Otp.");
            setIsOpt(1);
        }).catch(err=>console.log(err.message));
    }

    const verifyFunc = ()=>{
        let opt = optVal.current.value;
        // console.log(phone);
        otpFunc.current.value="";
        verifyOtp(opt).then(res=>{
            console.log(res);
            navigate("/dashboard");
        }).catch(err=>console.log(err.message));
    }

  return (
    <div>
        <form>
            <label htmlFor='email'>
                Enter Email:
                <input type="email" id='email' placeholder='Enter Email' ref={emailVal} required/>
            </label>
            <br /><br />
            <label htmlFor='password'>
                Enter Password:
                <input type="password" id='password' placeholder='Enter Password' ref={passVal} required/>
            </label>
            <br /><br />
            <button onClick={handleSignUp}>Login</button>
            <p>Or</p>
            <button type='button' onClick={googleLogIn} >Login With Google</button>
            <button type='button' >Login With Github</button>

            {   !isOpt?
                <div className="phoneContainer">
                    <input type="text" placeholder='+91 - ...' ref={phoneVal} required/>
                    <br /><br />
                    <div id="abc"></div>
                    <button type='button' onClick={otpFunc} >Send OTP</button>
                </div>
                :
                <div className="confirmContainer">
                    <input type="number" placeholder='+91 - ...' ref={optVal} min={6} required/>
                    <br /><br />
                    <button type='button' onClick={verifyFunc}>Verify OTP</button>
                </div>
            }

        </form>
    </div>
  )
}

export default Login