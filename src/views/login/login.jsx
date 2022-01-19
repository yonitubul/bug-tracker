import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {signIn} from '../../controllers/redux/authSlice'

export default function Login (){

    const dispatch=useDispatch();
    const [formInput , setFormInput] = useState({
        name:"",
        password:""
    })
     function handleInput(e){
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
     }
     function submit(e){
         dispatch(signIn(formInput));
         e.preventDefault();
     }

    return(
   <div className="login">
       <form className="login-panel">
           <h1>Login:</h1>
           <input type='name' name='text' placeholder="User Name" onChange={handleInput} value={formInput.name}></input>
           <input name="password" type='password' placeholder="Password" onChange={handleInput} value={formInput.password}></input>
           <button type="submit" onClick={submit}>Sign In</button>
       </form>
   </div>
   )
}


