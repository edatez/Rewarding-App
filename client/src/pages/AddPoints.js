import React, { useState } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

import api from "../utils/api";
import { useStoreContext } from "../store";


function AddPoints () {
    const [state, dispatch]= useStoreContext()   

    const [currentChild, setCurrentChild] = useState()

    console.log(currentChild);

    var addChildrenPoints = (event, name) => {
        event.preventDefault();

        alert("Adding '"+ name + "' points")

        // TODO update current child's points before sending the request
        var currentChild = state.user.children[0];

        api.AddPoint(currentChild)
            .then(() => {
                window.location.reload()
            })
            .catch(err => console.log(err));

    } 
    const { Input, Field, Control, Label } = Form;       

    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">

                    <Heading className="heading1">Add Points for <label id="child-selected"></label></Heading>                   

                    <Dropdown className="heading1 mb-5" onChange={(value) => setCurrentChild(value)} label={
                        currentChild ? currentChild.childName : "Select Child"
                    }>

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Heading subtitle size={5}>Current Balance: {50}</Heading>

                    <Container style={{ marginBottom: 40 }}>
                         
                    <Table className="is-narrow is-hoverable is-striped">
                        <thead>
                            <tr>                                               
                                <th>Activity</th>                        
                                <th>Point</th>
                                <th>Add Points</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {state.user && state.user.activities.map(activity => (
                            <tr key={activity._id}>                                
                                <td>{activity.activity}</td>                                
                                <td>{activity.activityPoints}</td>
                                <td><Button className="is-primary is-rounded" onClick={event => addChildrenPoints(event, activity.activity)}>Add Points</Button></td>                                
                            </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>                                               
                                <td></td>                        
                                <td></td>
                                <td></td>                                
                            </tr>
                        </tfoot>

                            </Table>
                        
                    </Container>                    
                    
                    <Container style={{ marginTop: 40 }}>                         
                        <Field>                            
                            <Button className="is-primary is-rounded" ><a className="has-text-white" href="/create-activities">Create Activities</a></Button>                            
                        </Field>               
                    </Container>
                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default AddPoints;