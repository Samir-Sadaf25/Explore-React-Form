import React, { useState } from 'react';

const ControlledFeild = () => {
    
    const [password,setPassword] = useState('secret')
    const [error,setError] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
    }
   const handleOnChangePassword = (e) =>{
        // console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length < 6)
        {
            setError('password must be 6 charecter')
        }
        else{
            setError('')
        }
   }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="email" name="email" placeholder='your email' required />
                <br />
                <input type="password" name="password" placeholder='your password' required defaultValue={password} onChange={handleOnChangePassword} />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledFeild;