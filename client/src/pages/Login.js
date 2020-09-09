import React, {useRef} from "react";
import { Columns, Container, Form, Button, Heading } from 'react-bulma-components';
import "./style.sass";

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
                window.location.href ="/dashboard";
            }) 
               
            .catch( errors => console.log(errors) );
        

    }   
    
    const { Input, Field, Control, Label } = Form;

    return (
        
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered "> 
                    <Heading className="heading1">Login</Heading>
                    <form onSubmit={handleSubmit}>
                    <Field>
                        <Control className="has-icons-left">                
                            <input className="input" type="email" name="email" placeholder="email" ref={emailInput} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>                    
                        </Control>
                    </Field>            
                    <br />
                    <Field>
                        <Control className="has-icons-left">             
                            <input className="input" type="password" name="password" placeholder="Password" ref={passwordInput} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>                            
                        </Control>
                    </Field>
                    
                    <br />
                    <Field>                        
                        <Button className="is-primary is-rounded">Submit</Button>                        
                    </Field>
                    </form>
                </Columns.Column> 
            </Container> 
        </Container>
              
    )
}

export default Login;