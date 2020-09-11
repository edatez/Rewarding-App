import React from "react";
import { Heading } from "react-bulma-components";

function About() {
    return (

      <div class="columns" >
      <div className="column pic" >
   
      <img src= "/images/photos.png"  className="img1"/> 
      </div>

        <div className="column">
    
              <Heading  size={3}>
              For your kids to get excited 
              </Heading>

              <Heading subtitle size={4}>
              to learn and help you with the chores:
              </Heading>

            <p style={{color:"black", fontSize: "18px",  opacity: "0.8" }} size={3}>
                
            <Heading  size={5}>Motivate your kids with Positive Reinforcement!</Heading>
                <p style={{fontFamily:"Balsamiq Sans, cursive", opacity: "0.8" }}>
                <br />
               EARN POINTS via activities,  
               
                <br />
                PICK THE REWARDS to accomplish,
                
                <br />
               CLEAN AND EASY interface,
                
                <br />
                SEE THE PROGRESS with a ring chart
                
                <br />
                <br />
                START NOW!
                </p>
            </p>
        </div>


      </div>


    )
}

export default About;
