import React from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

function RedeemRewards () {

    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container className="is-mobile">

            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Redeem Rewards</Heading>

                    <Heading subtitle size={5}>Current Balance: {50}</Heading>

                    <Container style={{ marginBottom: 40 }}>
                        <Heading subtitle size={5} className="heading2" >
                            Select Reward to Redeem
                        </Heading>               
                            <Table className="is-narrow is-hoverable is-bordered">
                                <thead>
                                    <tr>                        
                                        <th>Reward</th>                        
                                        <th>Point</th>
                                        <th>Select</th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><img style={{ width: 40, marginTop: -5 }} src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bike-128.png"></img>Bike</th>                                
                                        <td>200</td>
                                        <td>X</td>                                
                                    </tr>
                                </tbody>

                            </Table>
                        
                    </Container>
                    
                    {/* <Container>
                        <Heading subtitle size={4}>
                            Add New Activity
                        </Heading>

                        <form onSubmit>
                            <Field>                
                                <Control>                    
                                    <input className="input" type="text" name="Activities" placeholder="Enter Activity"/>                                                
                                </Control> 
                                <Control>                    
                                    <input className="input" type="text" name="point" placeholder="Enter point for Activity"/>                                                
                                </Control>               
                            </Field>
                        </form> 
                        
                    </Container> */}

                    <Container style={{ marginTop: 40 }}>
                        <Field>
                            
                                <Button className="is-primary is-rounded">Redeem Rewards</Button>
                            
                        </Field> 
                        <Field>
                            
                                <Button className="is-primary is-rounded"><a className="has-text-white" href="/create-rewards">Create Rewards</a></Button>
                            
                        </Field>               
                    </Container>
                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default RedeemRewards;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
