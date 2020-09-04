import React from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

function CreateActivities () {

    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Create Activities</Heading>

                    <Container style={{ marginBottom: 40 }}>
                        {/* <Heading subtitle size={4}>
                            Current Activity List
                        </Heading>                */}
                            <Table className="is-narrow is-hoverable is-bordered">
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
                        <Heading subtitle size={5} className="heading2">
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
                            
                                <Button className="is-primary is-rounded" >Add Activities</Button>
                            
                        </Field> 
                        <Field>
                           
                                <Button className="is-primary is-rounded" ><a className="has-text-white" href="/add-points">Back to Add Points</a></Button>
                            
                        </Field>               
                    </Container>

                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default CreateActivities;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
