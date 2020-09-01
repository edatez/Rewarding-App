import React from "react";
import { Container, Form, Button, Heading, Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function CreateRewards () {

    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container>  
            <Heading>Create Rewards</Heading>

            <Container style={{ marginBottom: 40 }}>
                <Heading subtitle size={4}>
                    Current Reward List
                </Heading>               
                    <Table>
                        <thead> 
                            <tr>                        
                                <th>Reward</th>                        
                                <th>Point</th>
                                <th>Show/Hide</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Bike</th>                                
                                <td>200</td>
                                <td>X</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table>
                
            </Container>
            
            <Container>
                <Heading subtitle size={4}>
                    Add New Reward
                </Heading>

                <form onSubmit>
                    <Field>                
                        <Control>                    
                            <input className="input" type="text" name="reward" placeholder="Enter Reward"/>                                                
                        </Control> 
                        <Control>                    
                            <input className="input" type="text" name="point" placeholder="Enter Point for Reward"/>                                                
                        </Control>               
                    </Field>
                </form> 
                
            </Container>

            <Container style={{ marginTop: 40 }}>
                <Field>
                    <Control>
                        <Button className="is-success">Add Reward</Button>
                    </Control>
                </Field>                
            </Container>

        </Container>
            
    )

}

export default CreateRewards;

// Table for current Rewards: show Rewards, points, checkbox to show/hide/delete
// Form to enter Rewards, points

