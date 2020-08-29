import React from "react";
import { Container, Form, Button, Heading, Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function CreateActivities () {

    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container>  
            <Heading>Create Activities</Heading>

            <Container style={{ marginBottom: 40 }}>
                <Heading subtitle size={4}>
                    Current Activity List
                </Heading>               
                    <Table>
                        <thead>
                            <tr>                        
                                <th>Activity</th>                        
                                <th>Point</th>
                                <th>Show/Hide</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Reading</th>                                
                                <td>20</td>
                                <td>X</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table>
                
            </Container>
            
            <Container>
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
                
            </Container>

            <Container style={{ marginTop: 40 }}>
                <Field>
                    <Control>
                        <Button className="is-success">Add Activities</Button>
                    </Control>
                </Field>                
            </Container>

        </Container>
            
    )

}

export default CreateActivities;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
