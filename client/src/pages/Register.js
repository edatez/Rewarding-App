import React, {useRef} from "react";

import api from "../utils/api";
import { useLogin } from "../utils/auth";

function Register() {

    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const password2Input = useRef();

    const login = useLogin();

    const handleSubmit =(e) => {
        e.preventDefault();
        const name=nameInput.current.value;
        const email=emailInput.current.value;
        const password=passwordInput.current.value;
        const password2=password2Input.current.value;


        api
            .register({ name, email, password, password2 })
            .then(()=>login( { email, password } ) )
            .then(()=>window.location.href = "./" );
       
    }
    
    return (
        <div class="container">
            <h1 class="title">Register</h1>
            <form onSubmit={handleSubmit}>
            <div class="field">                
                <div class="control has-icons-left has-icons-right">                    
                    <input class="input" type="text" name="name" placeholder="username" ref={nameInput} />
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>                    
                </div>                
            </div>            
            <br />
            <div class="field">
                <p class="control has-icons-left has-icons-right">                                    
                    <input class="input" type="email" name="email" placeholder="email" ref={emailInput} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>                    
                </p>
            </div>             
            <br />
            <div class="field">
                <p class="control has-icons-left">                                 
                    <input class="input" type="password" name="password" placeholder="Password" ref={passwordInput} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>                            
                </p>
            </div>            
            <br />
            <div class="field">
                <p class="control has-icons-left">                                 
                    <input class="input" type="password" name="password2" placeholder="Retype password" ref={password2Input} />                    
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>                            
                </p>
            </div>            
            <br />
            <div class="field">
                <p class="control">
                    <button class="button is-success">Submit</button>
                </p>
            </div>           
            </form>

        </div>
    )
}

export default Register;

