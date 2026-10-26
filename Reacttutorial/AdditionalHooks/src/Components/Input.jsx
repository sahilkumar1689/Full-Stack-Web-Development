import React, { forwardRef, useId } from 'react'

// Before React 19 we use forwardRef hook:
// const Input = forwardRef((props,ref)=> {
//     const id = useId();
//   return (
//     <>
//     <label htmlFor={id}>{props.label}</label>
//     <input type={props.inptype} id={id} ref={ref} {...props}/>
//     </>
//   )
// });


// But After react 19 we does not need to use forwardRef instead we can directly access the ref via props:

const Input = (props)=> {
    const id = useId();
  return (
    <>
    <label htmlFor={id}>{props.label}</label>
    <input type={props.inptype} id={id} ref={props.ref} {...props}/>
    </>
  )
};


export default Input;