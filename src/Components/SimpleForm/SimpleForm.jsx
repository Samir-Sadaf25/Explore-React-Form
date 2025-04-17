import React from 'react';

const SimpleForm = () => {
   const handleOnSubmit = (e) =>{
    e.preventDefault();  
    console.log(e.target.name.value);
   }

    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
               <input type="text" name="name" placeholder='your name' />
               <br />
               <input type="email" name="" placeholder='your email'/>
               <br />
               <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;