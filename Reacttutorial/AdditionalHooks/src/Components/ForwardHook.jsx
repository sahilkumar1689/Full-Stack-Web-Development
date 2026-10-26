import React, { useRef } from 'react'
import Input from './Input';

function ForwardHook() {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleForm = (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value , passwordRef.current.value);
    }

  return (
    <form onSubmit={handleForm}>
        <Input label="Name" placeholder="Enter Your Name" inptype="text" ref={nameRef} />
        <br />
        <Input label="Password" placeholder="Enter Your Password" inptype="password" ref={passwordRef} />
        <br />
        <button>Submit</button>
    </form>
  )
}

export default ForwardHook;