import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signOut} from "firebase/auth";
import { app } from "../../FirebaseAuth";

const auth = getAuth(app);

export const SignIn = async(email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        return res.user;
    } catch (err) {
        return err;
    }
}

export const LoginIn = async (email,password)=>{
    try {
        const res = await signInWithEmailAndPassword(auth,email,password);
        return res.user;
    } catch (err) {
        return err;
    }
}

export const logInWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    try {
        const res = await signInWithPopup(auth, provider);
        return res;
    } catch (err) {
        return err;
    }
}

export const sendOtp = async (phone)=>{
    const appVerifier = new RecaptchaVerifier(auth,"abc",{});
    try {
        const res = await signInWithPhoneNumber(auth,phone,appVerifier);
        window.confirmationResult = res;
        return res;
    } catch (err) {
        return err;
    }
}

export const verifyOtp = async (optVal)=>{
    try {
       const res= await (window.confirmationResult.confirm(optVal));
       return res;
    } catch (err) {
        return err;
    }
}

export const logoutAut = async ()=>{
    try {
        const res = await signOut(auth);
        return res;
    } catch (err) {
        return err;
    }
}