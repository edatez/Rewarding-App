import React, {useRef} from "react";
import { Columns, Container, Form, Button, Heading } from 'react-bulma-components';
import "./style.sass";

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
            .then(()=>window.location.href = "./dashboard" );
       
    }

    const { Input, Field, Control, Label } = Form;
    
    return (
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered">
                    <Heading className="heading1">Register</Heading>
                    <form onSubmit={handleSubmit}>
                    <Field className="is-narrow">                
                        <Control className="has-icons-left has-icons-right">                    
                            <input className="input" type="text" name="name" placeholder="username" ref={nameInput} />
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>                    
                        </Control>                
                    </Field>            
                    <br />
                    <Field>
                        <Control className="has-icons-left has-icons-right">                                    
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
                        <Control className="has-icons-left">                                 
                            <input className="input" type="password" name="password2" placeholder="Retype password" ref={password2Input} />                    
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

export default Register;

