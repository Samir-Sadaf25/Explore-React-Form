import React, { useState } from 'react';

const UseInputFeild = (defaultValue) => {
    
    const [feildValue,setFeildValue] = useState(defaultValue);
     
    const handleOnChange = (e) =>{
        setFeildValue(e.target.value);
        console.log("submit")
    }
    
    return [feildValue,handleOnChange];
};

export default UseInputFeild;