import React, { useState, useEffect  } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import axios from "axios";

function AddPoints () {
    const [activities, setActivities] = useState([])

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

    var addChildrenPoints = (event, name) => {
        event.preventDefault();
        alert("Add '"+ name + "' activity")
    } 
    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">

                    <Heading className="heading1">Add Points</Heading>

                    <Heading subtitle size={5}>Current Balance: {50}</Heading>

                    <Container style={{ marginBottom: 40 }}>
                         {/* <Heading subtitle size={4}>
                    Current Activity List
                </Heading>                */}
                    <Table className="is-narrow is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th></th>                   
                                <th>Activity</th>                        
                                <th>Point</th>
                                <th>Add Points</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map(activity => (
                            <tr key={activity.activity}>
                                <td><img style={{ width: 40 }} src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-05-128.png"></img></td>
                                <td>{activity.activity}</td>                                
                                <td>{activity.points}</td>
                                <td><Button className="is-primary is-rounded" onClick={event => addChildrenPoints(event, activity.activity)}>Add Points</Button></td>                                
                            </tr>
                            ))}
                        </tbody>

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

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
