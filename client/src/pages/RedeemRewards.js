import React, { useState, useEffect } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

import { useStoreContext } from "../store";

function RedeemRewards () {
    const [rewards, setRewards] = useState([])
    const [state, dispatch] = useStoreContext()
    const [currentChild, setCurrentChild] = useState()
    const { Field } = Form;

    useEffect(() => {
        loadRewards()
      }, [])

    function loadRewards() {
        // TODO set current child's rewards
        setRewards(state.user.children.rewards);
    };

    var redeemChildrenRewards = (event, name) => {
        event.preventDefault();
        alert("Redeem '"+ name + "' reward")
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
                            <Dropdown.Item value={child}>                                    
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
                                    {rewards.map(reward => (
                                    <tr key={reward.reward}>                                        
                                        <td><img style={{ width: 40, marginTop: -5 }} src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/bike-128.png"></img></td> 
                                        <td>{reward.reward}</td>                              
                                        <td>{reward.points}</td>
                                        <td><Button className="is-primary is-rounded" onClick={event => redeemChildrenRewards(event, reward.reward)}>Redeem</Button></td>
                                    </tr>
                                    ))}
                                    <tr>
                                        </tr>
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
