import React, { useState, useEffect  } from "react";
import { Container, Form, Button, Heading, Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
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
            
        <Container>  
            <Heading>Create Activities</Heading>

            <Container style={{ marginBottom: 40 }}>
                <Heading subtitle size={4}>
                    Current Activity List
                </Heading>               
                    <Table className="is-narrow is-hoverable is-bordered">
                        <thead>
                            <tr>                        
                                <th>Activity</th>                        
                                <th>Point</th>
                                <th>Delete</th>
                                <th>Show/Hide</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map(activity => (
                            <tr key={activity.activity}>
                                <th>{activity.activity}</th>                                
                                <td>{activity.points}</td>
                                <td><Button onClick={()=>handleDelete(activity.activity)}>Delete</Button></td>
                                <td>X</td>
                            </tr>
                            ))}
                        </tbody>

                    </Table>
                
            </Container>
            
            <Container>
                <Heading subtitle size={4}>
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
                    <Control>
                        <Button onClick={handleFormSubmit} className="is-success">Add Activities</Button>
                    </Control>
                </Field> 
                <Field>
                    <Control>
                        <Button className="is-link is-light"><a href="/add-points">Back to Add Points</a></Button>
                    </Control>
                </Field>               
            </Container>

        </Container>
            
    )

}

export default CreateActivities;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
