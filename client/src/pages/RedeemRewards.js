import React, { useState, useEffect } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

import { useStoreContext } from "../store";
import api from "../utils/api";

function RedeemRewards () {
    const [state, dispatch] = useStoreContext()
    const [currentChild, setCurrentChild] = useState()
    const { Field } = Form;

    var redeemChildrenRewards = (event, rewardId) => {
        event.preventDefault();
        
        if(!currentChild) {
            alert("Please select a child first");
            return;
        }

        api.redeemReward(currentChild._id, rewardId)
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
    } 
   
       
    return (
            
        <Container className="is-mobile">

            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Redeem Rewards for</Heading>

                    <Dropdown className="heading1 mb-5" onChange={(value) => setCurrentChild(value)} label={
                        currentChild ? currentChild.childName : "Select Child"
                    }>

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child} key={child._id}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Heading subtitle size={5}>Current Balance: {50}</Heading>

                    <Container style={{ marginBottom: 40 }}>
                        <Heading subtitle size={5} className="heading2" >
                            Select Reward to Redeem
                        </Heading>               
                            <Table className="is-narrow is-hoverable is-bordered">
                                <thead>
                                    <tr>      
                                        <th></th>                          
                                        <th>Reward</th>                        
                                        <th>Point</th>
                                        <th>Redeem</th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    { currentChild && state.user  ? 
                                    currentChild.rewards.map(reward => (
                                    <tr key={reward._id}>                                        
                                        <td><img style={{ width: 40, marginTop: -5 }} src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bike-128.png"></img></td> 
                                        <td>{reward.rewardName}</td>                              
                                        <td>{reward.rewardPoints}</td>
                                        <td><Button disabled={reward.redeemed} className="is-primary is-rounded" onClick={event => redeemChildrenRewards(event, reward._id)}>Redeem</Button></td>
                                    </tr>
                                    )) : 
                                    <tr key="None">
                                        <td colSpan="4">Select a child to see rewards list</td>
                                    </tr> }
                                </tbody>

                            </Table>
                        
                    </Container>                  
                    
                    <Container style={{ marginTop: 40 }}>                        
                        <Field>
                            
                                <Button className="is-primary is-rounded"><a className="has-text-white" href="/create-rewards">Create Rewards</a></Button>
                            
                        </Field>               
                    </Container>
                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default RedeemRewards;

// Table for current activities: show activities, points, checkbox to show/hide/delete
// Form to enter activities, points
