import React, { useState, useEffect  } from "react";
import { Container, Dropdown, Form, Button, Heading } from 'react-bulma-components';
import "./style.sass";
import axios from "axios";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard () {

    const percentage = 66;  
    
    const { Input, Field, Control, Label } = Form;

    const [rewards, setRewards] = useState([])

    const api = "http://localhost:3001";

    useEffect(() => {
        loadRewards()
      }, [])

    function loadRewards() {
        (new Promise(r => setTimeout(r, 1000))).then( ()=> {
            axios.get(api + "/api/reward")
            .then(res => 
                setRewards(res.data)
            )
            .catch(err => console.log(err))
        });
    };

    function loadProgress() {

    }
    
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Container className="is-narrow has-text-centered">
                    <Heading className="heading1">Dashboard</Heading>

                    <Container style={{ marginBottom: 40 }}>
                        <Heading subtitle size={6}>
                            Current balance = {50}
                        </Heading>
                        <Heading subtitle size={6}>
                            Progress for 
                            <Dropdown className="ml-3">                                                         
                                {rewards.map(reward => (                                
                                    <Dropdown.Item value="item" onClick={loadProgress(reward.reward)} key={reward.reward}>                                    
                                        {reward.reward}                          
                                    </Dropdown.Item>
                                ))}                                                                                                                            
                            </Dropdown>
                        </Heading>
                    </Container>

                    <Container style={{ width: 250 }}>
                        <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            styles={buildStyles({
                                
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0,
                            
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                            
                                // Text size
                                textSize: '16px',
                            
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                            
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                            
                                // Colors
                                pathColor: `rgba(248, 150, 30)`,
                                textColor: '#43AA8B',
                                trailColor: '#F9C74F',
                                backgroundColor: '#F9C74F',
                                
                            })}                 
                        />     
                    </Container>  

                    <Container style={{ marginTop: 40, marginBottom: 50 }}>
                        <Field>
                            
                                <Button className="is-primary is-rounded" ><a className="has-text-white" href="/add-points">Add Points</a></Button>
                            
                        </Field>

                        <Field>
                            
                                <Button className="is-primary is-rounded" ><a className="has-text-white" href="/redeem-rewards">Redeem Rewards</a></Button>
                            
                        </Field>
                    </Container>

                </Container>
            </Container>
        </Container>
            
    )

}

export default Dashboard;

// Link to current point balance
// Link to reward list as dropdown
// Percentage = current balance / points for selected reward
// Icon for reward in the middle of ring



