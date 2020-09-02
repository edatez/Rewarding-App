import React from "react";
import { Container, Form, Button, Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard () {

    const percentage = 66;  
    
    const { Input, Field, Control, Label } = Form;
    
    return (
            
        <Container>  
            <Heading>Dashboard</Heading>

            <Container style={{ marginBottom: 40 }}>
                <Heading subtitle size={6}>
                    Current balance = {50}
                </Heading>
                <Heading subtitle size={6}>
                    Progress for = {"reward list"}
                </Heading>
            </Container>
            <div style={{ width: 250 }}>
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
            </div>  

            <Container style={{ marginTop: 40 }}>
                <Field>
                    <Control>
                        <Button className="is-link is-light"><a href="/add-points">Add Points</a></Button>
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Button className="is-link is-light"><a href="/redeem-rewards">Redeem Rewards</a></Button>
                    </Control>
                </Field>
            </Container>

        </Container>
            
    )

}

export default Dashboard;

// Link to current point balance
// Link to reward list as dropdown
// Percentage = current balance / points for selected reward
// Icon for reward in the middle of ring



