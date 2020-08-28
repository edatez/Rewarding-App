import React, {useRef} from "react";

import { useLogin } from "../utils/auth";

function Login() {
    // const isAuth=useIsAuthenticated();
    // const logout=useLogout();

    const emailInput = useRef();
    const passwordInput = useRef();
    
    const login = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
 
        const email=emailInput.current.value;
        const password=passwordInput.current.value;

  // Auto Login after registration
        login( { email, password } )
            .then( userAuth =>{
                console.log( userAuth )
                window.location.href ="/";
            }) 
               
            .catch( errors => console.log(errors) );
        

    }   
    
    return (
        
        <div class="container">                    
            <h1 class="title">Login</h1>
            <form onSubmit={handleSubmit}>
            <div class="field">
                <p class="control has-icons-left">                
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
                <p class="control">
                    <button class="button is-success">Submit</button>
                </p>
            </div>
            </form>
        </div>
              
    )
}

export default Login;