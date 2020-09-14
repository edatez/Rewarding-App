import React, { useState } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import api from "../utils/api";
import { useStoreContext } from "../store";

function CreateRewards () {
    // const [rewards, setRewards] = useState([])
    const [formObject, setFormObject] = useState({})
    const [state, dispatch] = useStoreContext()
    const [currentChild, setCurrentChild] = useState()
    const { Field, Control } = Form;

    var handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    var handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        if(!currentChild) {
            alert("Please select a child first");
            return;
        }

        api.createReward(currentChild._id, {
            reward: formObject.reward,
            points: formObject.points
        })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
      };
    
    var handleDelete = (rewardId) => {

        if(!currentChild) {
            alert("Please select a child first");
            return;
        }

        api.deleteReward(currentChild._id, rewardId)
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
    };    
       
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Create Rewards for <span className="red">{currentChild ? currentChild.childName :""}</span></Heading>

                    <Dropdown className="heading1 mb-5" onChange={(value) => setCurrentChild(value)} label="Select Child">

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child} key={child._id}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Container style={{ marginBottom: 40 }}>
                        {/* <Heading subtitle size={4}>
                            Current Reward List
                        </Heading>                */}
                            <Table className="is-narrow is-hoverable is-striped">
                                <thead> 
                                    <tr>                        
                                        <th>Rewards</th>                        
                                        <th>Points</th>
                                        <th>Delete</th>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentChild && currentChild.rewards.map(reward=> (
                                    <tr key={reward._id}>
                                        <th>{reward.rewardName}</th>                                
                                        <td>{reward.rewardPoints}</td>
                                        <td><Button className="is-rounded is-danger is-light" onClick={()=>handleDelete(reward._id)}>Delete</Button></td>                                       
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
                            Add New Reward
                        </Heading>

                        <form>
                            <Field>                
                                <Control>                    
                                    {<input className="input" type="text" name="reward" onChange={handleInputChange} placeholder="Enter Reward"/> }                                     
                                </Control> 
                                <Control>                    
                                    {<input className="input" type="text" name="points" onChange={handleInputChange} placeholder="Enter Point for Reward"/> }                                                          </Control>               
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
