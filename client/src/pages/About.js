import React from "react";
import { Content } from "react-bulma-components";
// import "./style.sass";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <Content className="has-text-centered">
      <p>
        "This is an application for positive reinforcement of good behaviors and
        motivating your kids! Its interface is clean and easy as well as kid
        friendly so you can add or remove activities and pick the rewards to
        accomplish. You can see the progress of your child with a visual ring
        chart."
        <a href="">Start Your Motivation!</a>. .
      </p>
    </Content>
  );
}

export default About;
