import React from "react";
import { Heading } from "react-bulma-components";

function About() {
    return (

      <div class="columns">
      <div class="column">
   
      <img src= "/images/photos.png" /> 
      </div>
      <div class="column">
    
              <Heading  size={1}>
              For your kids to get excited 
              </Heading>

              <Heading subtitle size={3}>
              to learn and help you with the chores:
              </Heading>

            <p style={{color:"#ffcc00", fontFamily:"sans-serif" }} size={3}>
                <br />
                <b >Motivate your kids with Positive Reinforcement!</b>
                <br />
                <br />
               EARN POINTS via activities  
                <br />
                <br />
                PICK THE REWARDS to accomplish 
                <br />
                <br />
               CLEAN AND EASY Interface
                <br />
                <br />
                SEE THE PROGRESS with a ring chart
                <br />
                <br />
                START NOW!
            </p>
        </div>


      </div>


    )
}

export default About;
