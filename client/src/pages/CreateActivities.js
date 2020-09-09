import React, { useState, useEffect  } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import axios from "axios";

function CreateActivities () {
    const [activities, setActivities] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadActivities()
      }, [])

    const api = "http://localhost:3001";
    function loadActivities() {
        (new Promise(r => setTimeout(r, 1000))).then( ()=> {
            axios.get(api + "/api/activity")
            .then(res => 
                setActivities(res.data)
            )
            .catch(err => console.log(err))
        });
    };

    var handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    var handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        axios.post(api + "/api/activity", {
            activity: formObject.activity,
            points: formObject.points
          })
        .then(res => {
            loadActivities();
        })
        .catch(err => console.log(err));
      };
    
    var handleDelete = (name) => {
        axios.delete(api + "/api/activity/" + name)
        .then(res => loadActivities())
        .catch(err => console.log(err));
    } 
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
                                <th>Delete</th>
                                {/* <th>Show/Hide</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map(activity => (
                            <tr key={activity.activity}>
                                <td>{activity.activity}</td>                                
                                <td>{activity.points}</td>
                                <td><Button className="is-rounded" onClick={()=>handleDelete(activity.activity)}>Delete</Button></td>
                                {/* <td>X</td> */}
                            </tr>
                            ))}
                        </tbody>

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
