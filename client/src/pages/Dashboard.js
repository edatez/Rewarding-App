import React, { useState, useEffect } from "react";
import { Container, Dropdown, Form, Button, Heading } from 'react-bulma-components';
import "./style.sass";
import $ from "jquery";
import { useStoreContext } from "../store";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useIsAuthenticated } from "../utils/auth";

function Dashboard () {
    // const isAuth=useIsAuthenticated()
    
    // console.log(isAuth);
    // if(!isAuth){
        
    // }

    const { Field } = Form;

    const [state, dispatch] = useStoreContext()

    const [currentChild, setCurrentChild] = useState()
    const [currentReward, setCurrentReward] = useState()
    const [percentage, setPercentage] = useState(0)

    var setChild = (value) => {
        setCurrentChild(value);
    }
    
    var setReward = (value) => {
        setCurrentReward(value);
        setPercentage((100 * currentChild.pointsEarned / value.rewardPoints).toFixed(2));
    }

    function loadProgress(reward) {        
        $("#reward-selected").text(reward);
    }

    $(document).ready(function() {

        // Check for click events on the navbar burger icon
        $(".dropdown").click(function() {
      
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".dropdown").toggleClass("is-active");
            $(".dropdown-menu").toggleClass("is-active");
                  
        });
      });
    
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Container className="is-narrow has-text-centered">
                    <Heading className="heading1">Dashboard for </Heading>

                    <Dropdown className="heading1 mb-5" onChange={(value) => setChild(value)} label={
                        currentChild ? currentChild.childName : "Select Child"
                    }>

                        {state.user && state.user.children.map(child => (                                
                            <Dropdown.Item value={child} key={child._id}>                                    
                                {child.childName}                          
                            </Dropdown.Item>
                        ))}                        
                        
                    </Dropdown>

                    <Container style={{ marginBottom: 40 }}>
                        <Heading subtitle size={6}>
                            Current balance = {currentChild ? currentChild.pointsEarned : 0}
                        </Heading>
                        <Container className="is-centered" >

                            <Heading subtitle size={6}>Progress for <label id="reward-selected"></label></Heading>                            

                            <Dropdown className="heading1 mb-5" onChange={(value) => setReward(value)} label={
                                    currentReward ? currentReward.rewardName : "Select Reward" }>
                                    {currentChild && currentChild.rewards.map(reward => (                               
                                        <Dropdown.Item value={reward} onClick={()=>loadProgress(reward.rewardName)} key={reward._id}>                                    
                                            {reward.rewardName}                          
                                        </Dropdown.Item>
                                    ))}         
                            </Dropdown>
                            {/* <div className="dropdown ml-3">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                    <span>Select Reward</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </button>
                                </div>

                                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                    <div className="dropdown-content">
                                        {currentChild && currentChild.rewards.map(reward => (                               
                                            <Dropdown.Item value={reward.rewardName} onClick={()=>loadProgress(reward.rewardName)} key={reward._id}>                                    
                                                {reward.rewardName}                          
                                            </Dropdown.Item>
                                        ))}                                        
                                    </div>
                                </div>
                            </div>                            */}

                        </Container>
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



