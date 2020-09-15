import React, { useState, useEffect } from "react";
import { Columns, Container, Dropdown, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";

import api from "../utils/api";
import { useStoreContext } from "../store";


function AddPoints () {
    const [state, dispatch]= useStoreContext()   

    const [currentChild, setCurrentChild] = useState()

    const { Field } = Form;

    useEffect (() => {

        if (state.user) {

            setCurrentChild (state.user.children[0])

        }

    }, [state.user])

    function addChildrenPoints(event, activityPoints){
        event.preventDefault();

        if(!currentChild) {
            alert("Please select a child first");
            return;
        }

        console.log(currentChild._id)
        console.log(activityPoints)

        api.addPoint(currentChild._id, {activityPoints})
            .then(()=>{
                window.location.reload()
            })
            .catch(err=> console.log(err));

    }      

    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ">

                    <Heading className="heading1">Add Points for <span className="red">{currentChild ? currentChild.childName :""}</span></Heading>                   

                    <Dropdown className="heading1 mb-5" value={currentChild} onChange={(value) => setCurrentChild(value)} label="Select Child">

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Heading subtitle size={5}>Current Balance: <span className="red">{currentChild ? currentChild.pointsEarned : "select Child First"}</span></Heading>

                    <Container style={{ marginBottom: 40 }}>
                         
                    <Table className="is-narrow is-hoverable is-striped">
                        <thead>
                            <tr>                                               
                                <th>Activity</th>                        
                                <th>Point</th>
                                <th>Add Points</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {state.user && state.user.activities.map(activity => (
                            <tr key={activity._id}>                                
                                <td>{activity.activity}</td>                                
                                <td value={activity.activityPoints}>{activity.activityPoints}</td>
                                <td><Button className="is-primary is-rounded" onClick={event => addChildrenPoints(event, activity.activityPoints)}>Add Points</Button></td>                                
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
                    
                    <Container style={{ marginTop: 40 }}>                         
                        <Field>                            
                            <Button className="is-primary is-rounded" ><a className="has-text-white" href="/create-activities">Create Activities</a></Button>                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <Button className="is-primary is-rounded" ><a className="has-text-white" href="/dashboard">Dashboard</a></Button>
                            <Button className="is-primary is-rounded" ><a className="has-text-white" href="/redeem-rewards">Redeem Rewards</a></Button>
                        </Field>               
                    </Container>
                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default AddPoints;