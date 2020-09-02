import React, { useState, useEffect  } from "react";
import { Container, Form, Button, Heading, Table } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import axios from "axios";

function CreateRewards () {
    const [rewards, setRewards] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadRewards()
      }, [])

    const api = "http://localhost:3001";
    function loadRewards() {
        (new Promise(r => setTimeout(r, 1000))).then( ()=> {
            axios.get(api + "/api/reward")
            .then(res => 
                setRewards(res.data)
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
        axios.post(api + "/api/reward", {
            reward: formObject.reward,
            points: formObject.points
          })
        .then(res => {
            loadRewards();
        })
        .catch(err => console.log(err));
      };
    
    var handleDelete = (name) => {
        axios.delete(api + "/api/reward/" + name)
        .then(res => loadRewards())
        .catch(err => console.log(err));
    } 

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
                                <th>Delete</th>
                                <th>Show/Hide</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rewards.map(reward => (
                            <tr key={reward.reward}>
                                <th>{reward.reward}</th>                                
                                <td>{reward.points}</td>
                                <td><Button onClick={()=>handleDelete(reward.reward)}>Delete</Button></td>
                                <td>X</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                
            </Container>
            
            <Container>
                <Heading subtitle size={4}>
                    Add New Reward
                </Heading>

                <form>
                    <Field>                
                        <Control>                    
                            <input className="input" type="text" name="reward" onChange={handleInputChange} placeholder="Enter Reward"/>                                                
                        </Control> 
                        <Control>                    
                            <input className="input" type="text" name="points" onChange={handleInputChange} placeholder="Enter Point for Reward"/>                                                
                        </Control>               
                    </Field>
                </form> 
                
            </Container>

            <Container style={{ marginTop: 40 }}>
                <Field>
                    <Control>
                        <Button onClick={handleFormSubmit} className="is-success">Add Reward</Button>
                    </Control>
                </Field>                
            </Container>

        </Container>
            
    )

}

export default CreateRewards;

// Table for current Rewards: show Rewards, points, checkbox to show/hide/delete
// Form to enter Rewards, points

