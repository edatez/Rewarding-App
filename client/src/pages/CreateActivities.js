import React, { useState } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import api from "../utils/api";
import { useStoreContext } from "../store";

function CreateActivities () {
    
    const [formObject, setFormObject] = useState({})
    const [state, dispatch]= useStoreContext()

    
    var handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    var handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        api.createActivity({
            activity: formObject.activity,
            points: formObject.points
          })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
      };
    
    var handleDelete = (activityId) => {
        api.deleteActivity(activityId)
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
    };

    const { Field, Control } = Form;
       
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Create Activities</Heading>

                    <Container style={{ marginBottom: 40 }}>                
                        <Table className="is-narrow is-hoverable is-striped">
                            <thead>
                                <tr>                        
                                    <th>Activity</th>                        
                                    <th>Point</th>
                                    <th>Delete</th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {state.user && state.user.activities.map(activity => (
                                <tr key={activity._id}>
                                    <td>{activity.activity}</td>                                
                                    <td>{activity.activityPoints}</td>
                                    <td><Button className="is-rounded is-danger is-light" onClick={()=>handleDelete(activity._id)}>Delete</Button></td>                                
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
                    
                    <Container>
                        <Heading subtitle size={5} className="heading2">
                            Add New Activity
                        </Heading>                

                        <form>
                            <Field>                
                                <Control>                    
                                    <input className="input" type="text" name="activity" onChange={handleInputChange} placeholder="Enter Activity"/>                                                
                                </Control> 
                                <Control>                    
                                    <input className="input" type="text" name="points" onChange={handleInputChange} placeholder="Enter point for Activity"/>                                                
                                </Control>               
                            </Field>
                        </form> 
                    
                    </Container>

                    <Container style={{ marginTop: 40 }}>
                        <Field>
                            
                                <Button className="is-primary is-rounded" onClick={handleFormSubmit}>Add Activities</Button>
                            
                        </Field> 
                        <Field>
                            
                                <Button className="is-primary is-rounded"><a className="has-text-white" href="/add-points">Back to Add Points</a></Button>
                            
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
