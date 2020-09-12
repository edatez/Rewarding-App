import React from "react";
import { Container, Hero, Button, Heading, Form } from 'react-bulma-components';
import "./style.sass";

import {useIsAuthenticated, useLogout} from "../utils/auth";

function Home() {
    const isAuth=useIsAuthenticated();
    const logout=useLogout();

    const { Field } = Form;
    
    return (
        <Container className="is-mobile">        
            <Container className="is-centered">    
                <Container className="is-narrow has-text-centered">
                    
                        {/* <Heading>Rewarding App</Heading> */}
                        {
                            isAuth
                                ? <Button className="is-primary is-rounded mb-3" style={{ width: 100 }} onClick={logout}>Logout</Button>
                                : <Button className="is-primary is-rounded mb-3" style={{ width: 100 }}><a className="has-text-white" href="/login">Login</a></Button>
                        }

                        <br />
                        
                            <Field>
                                <Button className="is-primary is-rounded" style={{ width: 100 }}><a className="has-text-white" href="/register">Register</a></Button>
                            </Field>
                          
                    
                </Container>
            </Container>
        </Container>   
    )
}

export default Home;