import React from "react";
import { Heading } from "react-bulma-components";

function About() {
    return (

      <div class="columns">
      <div className="column"  >
   
      <img src= "/images/photos.png"  className="img1"/> 
      </div>

        <div className="column">
    
              <Heading  size={3}>
              For your kids to get excited 
              </Heading>

              <Heading subtitle size={4}>
              to learn and help you with the chores:
              </Heading>

            <p style={{color:"black", fontSize: "18px", fontFamily:"sans-serif", opacity: "0.7" }} size={3}>
                
                <b >Motivate your kids with Positive Reinforcement!</b>
                
                <br />
               EARN POINTS via activities  
               
                <br />
                PICK THE REWARDS to accomplish 
                
                <br />
               CLEAN AND EASY Interface
                
                <br />
                SEE THE PROGRESS with a ring chart
                
                <br />
                START NOW!
            </p>
        </div>


      </div>


    )
}

export default About;
