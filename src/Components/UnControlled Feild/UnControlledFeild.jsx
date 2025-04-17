import React, { useRef } from 'react';

const UnControlledFeild = () => {
    
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleOnSubmit = (e) =>{
        e.preventDefault();  
        // console.log(e.target.name.value);
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
       }
    
    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
               <input ref={emailRef} type="email" name="email" placeholder='your email' />
               <br />
               <input ref={passwordRef} type="password" name="password" placeholder='your password'/>
               <br />
               <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledFeild;