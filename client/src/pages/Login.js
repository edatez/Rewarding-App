import React, {useRef} from "react";

import { useLogin } from "../utils/auth";

function Login() {
    // const isAuth=useIsAuthenticated();
    // const logout=useLogout();

    const emailInput = useRef();
    const passwordInput = useRef();
    
    const login = useLogin();

    const handleSubmit =(e) => {
        e.preventDefault();
 
        const email=emailInput.current.value;
        const password=passwordInput.current.value;

        login( { email, password } )
            .then( userAuth => {
                console.log( userAuth ); 
                window.location.href ="/";
            })
            .catch( errors => console.log(errors) );
        
};
        
    
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={}>
            <input type="email" name="email" placeholder="email" ref={emailInput} />
            <br />
            <input type="password" name="password" placeholder="Password" ref={passwordInput} />
            <br />
            <button>Submit</button>
            </form>
            {/* {
                isAuth
                    ? <button onClick={logout}>Logout</button>
                    :<a href="/login">Login</a>
            }

            <br />
            <a href="/register">Register</a> */}
        </div>
    )
}

export default Login;