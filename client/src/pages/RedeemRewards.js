import React from "react";
import { Container, Form, Button, Heading, Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function RedeemRewards () {

    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container>  
            <Heading>Redeem Rewards</Heading>

            <Heading subtitle size={5}>Current Balance: {50}</Heading>

            <Container style={{ marginBottom: 40 }}>
                <Heading subtitle size={4}>
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
                    <Control>
                        <Button className="is-success">Redeem Rewards</Button>
                    </Control>
                </Field> 
                <Field>
                    <Control>
                        <Button className="is-link is-light"><a href="/create-rewards">Create Rewards</a></Button>
                    </Control>
                </Field>               
            </Container>

        </Container>
            
    )

}

export default RedeemRewards;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
