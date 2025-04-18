import React from 'react';
import UseInputFeild from '../Hook/UseInputFeild';

const HookForm = () => {

    const [name,nameOnChange] = UseInputFeild('')
    const [email,emailOnChange] = UseInputFeild('');
    const [password,passwordOnChange] = UseInputFeild('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("submit",name,email,password)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                
                <input type="name" name="name" placeholder='your name' onChange={nameOnChange} defaultValue={name} />
                <br />
                <input type="email" onChange={emailOnChange} defaultValue={email} name="email" placeholder='your email' required />
                <br />
                <input type="password" name="password" placeholder='your password' required defaultValue={password} onChange={passwordOnChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;