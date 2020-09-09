import React, { useState, useEffect  } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import axios from "axios";

function RedeemRewards () {
    const [rewards, setRewards] = useState([])

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

    var redeemChildrenRewards = (event, name) => {
        event.preventDefault();
        alert("Redeem '"+ name + "' reward")
    } 
    const { Input, Field, Control, Label } = Form;
       
    return (
            
        <Container className="is-mobile">

            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">  
                    <Heading className="heading1">Redeem Rewards</Heading>

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
