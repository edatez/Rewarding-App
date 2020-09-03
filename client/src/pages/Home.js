import React from "react";
import { Columns, Container, Hero, Button, Heading, Form } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import {useIsAuthenticated, useLogout} from "../utils/auth";

function Home() {
    const isAuth=useIsAuthenticated();
    const logout=useLogout();

    const { Input, Field, Control, Label } = Form;
    
    return (
        <Columns className="is-mobile">        
            <Columns.Column className="is-half is-offset-one-quarter is-centered">    
                <Columns.Column className="is-narrow has-text-centered">
                    
                        {/* <Heading>Rewarding App</Heading> */}
                        {
                            isAuth
                                ? <Button className="is-link is-outlined is-rounded mb-3" style={{ width: 100 }} onClick={logout}>Logout</Button>
                                : <Button className="is-link is-outlined is-rounded mb-3" style={{ width: 100 }}><a href="/login">Login</a></Button>
                        }

                        <br />
                        
                            <Field>
                                <Button className="is-link is-outlined is-rounded" style={{ width: 100 }}><a href="/register">Register</a></Button>
                            </Field>
                          
                    
                </Columns.Column>
            </Columns.Column>
        </Columns>   
    )
}

export default Home;