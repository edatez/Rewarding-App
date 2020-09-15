import React, { useState, useEffect } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

import { useStoreContext } from "../store";
import api from "../utils/api";

function RedeemRewards () {
    const [state, dispatch] = useStoreContext()
    const [currentChild, setCurrentChild] = useState()
    const { Field } = Form;

    useEffect (() => {

        if (state.user) {

            setCurrentChild (state.user.children[0])

        }

    }, [state.user])

    var redeemChildrenRewards = (event, rewardId, rewardPoints) => {
        event.preventDefault();
        
        console.log(currentChild.pointsEarned)
        console.log(rewardPoints)
        console.log(currentChild)

        const subtractPoints= -rewardPoints
        console.log(subtractPoints)

        if(currentChild.pointsEarned>=rewardPoints){
            console.log("You can redeem this one with an API call")
            api.redeemReward(currentChild._id, rewardId)
            .then(() => {
                window.location.reload()
            })
            .catch(err => console.log(err));
            api.addPoint(currentChild._id, {activityPoints:subtractPoints})
                .then(()=>{
                    window.location.reload()
                })
                .catch(err=>console.log(err))

            return
        }{
            alert("You dont have enough points for that!")
        }


    } 
   
       
    return (
            
        <Container className="is-mobile">

            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Redeem Rewards for <span className="red">{currentChild ? currentChild.childName :""}</span></Heading>

                    <Dropdown className="heading1 mb-5" onChange={(value) => setCurrentChild(value)} label="Select Child">

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child} key={child._id}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Heading subtitle size={5}>Current Balance: <span className="red">{currentChild ? currentChild.pointsEarned : "select Child First"}</span></Heading>

                    <Container style={{ marginBottom: 40 }}>                                    
                            <Table className="is-narrow is-hoverable is-striped">
                                <thead>
                                    <tr>                                                 
                                        <th>Reward</th>                        
                                        <th>Point</th>
                                        <th>Redeem</th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    { currentChild && state.user  ? 
                                    currentChild.rewards.map(reward => (
                                    <tr key={reward._id}>                                         
                                        <td>{reward.rewardName}</td>                              
                                        <td>{reward.rewardPoints}</td>
                                        <td><Button disabled={reward.redeemed} className="is-primary is-rounded" onClick={event => redeemChildrenRewards(event, reward._id, reward.rewardPoints)}>Redeem</Button></td>
                                    </tr>
                                    )) : 
                                    <tr key="None">
                                        <td colSpan="4">Select a child to see rewards list</td>
                                    </tr> }
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
                            
                                <Button className="is-primary is-rounded"><a className="has-text-white" href="/create-rewards">Create Rewards</a></Button>
                            
                        </Field>               
                    </Container>
                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default RedeemRewards;

