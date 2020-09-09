import React from "react";
import { Hero, Heading, Container } from "react-bulma-components";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add( faGlobe );

function About() {
    return (
      <Hero  >
      {/*  backgroundPosition: "bottom-right", backgroundSize: "contain" */}
        <div className="is-overlay" style={{ backgroundImage: "/logo/photos.png" }}></div>
        <Hero.Body>
          <Container style={{textAlign:"center"}}>
      
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

          </Container>
        </Hero.Body>
      </Hero>
    )
}

export default About;
