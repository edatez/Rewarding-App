import React, { useState, useEffect  } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
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
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Create Rewards</Heading>

                    <Container style={{ marginBottom: 40 }}>
                        {/* <Heading subtitle size={4}>
                            Current Reward List
                        </Heading>                */}
                            <Table className="is-narrow is-hoverable is-bordered">
                                <thead> 
                                    <tr>                        
                                        <th>Reward</th>                        
                                        <th>Point</th>
                                        <th>Delete</th>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {rewards.map(reward => (
                                    <tr key={reward.reward}>
                                        <th>{reward.reward}</th>                                
                                        <td>{reward.points}</td>
                                        <td><Button className="is-primary is-rounded" onClick={()=>handleDelete(reward.reward)}>Delete</Button></td>                                        
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        
                    </Container>
                    
                    <Container>
                        <Heading subtitle size={5} className="heading2">
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
                            
                                <Button className="is-primary is-rounded" onClick={handleFormSubmit}>Add Reward</Button>
                            
                        </Field>
                        <Field>
                            
                                <Button className="is-primary is-rounded" ><a className="has-text-white" href="/redeem-rewards">Back to Redeem Rewards</a></Button>
                            
                        </Field>                 
                    </Container>    
                </Columns.Column>
            </Container>    
        </Container>
            
    )

}

export default CreateRewards;

// Table for current Rewards: show Rewards, points, checkbox to show/hide/delete
// Form to enter Rewards, points

