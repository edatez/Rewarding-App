import React from "react";
import { Container, Hero, Button, Heading, Form } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import {useIsAuthenticated, useLogout} from "../utils/auth";

function Home() {
    const isAuth=useIsAuthenticated();
    const logout=useLogout();

    const { Input, Field, Control, Label } = Form;
    
    return (
        <div>                
        
            <Hero>    
                <Hero.Body>
                    <Container>
                        <Heading>Rewarding App</Heading>
                        {
                            isAuth
                                ? <Button onClick={logout}>Logout</Button>
                                : <Button ><a href="/login">Login</a></Button>
                        }

                        <br />
                        <Field>
                            <Control>
                                <Button ><a href="/register">Register</a></Button>
                            </Control>
                        </Field>  
                    </Container>
                </Hero.Body>
            </Hero>
        </div>   
    )
}

export default Home;