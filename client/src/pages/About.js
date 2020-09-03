import React from "react";
import { Content, Media, Image, Level, Icon,  } from "react-bulma-components";
import img from "../logo/photos.png";

// import "./style.sass";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (

<Media renderAs="article">
  <Media.Item className="img" renderAs="a" position="left">
    <Image size={50} alt="rainbow" src={img} />
  </Media.Item>
  <Media.Item>
    <Content >

      <p >

        <br />
        Motivate your kids with Positive Reinforcement!
        <br />
        Earn Points via activities  
        <br />
        Pick the rewards to accomplish '
        <br />
        Clean and Easy Interface
        <br />
        See the progress with a ring chart
        <br />
        Start NOW!
      </p>
    </Content>
    <Level renderAs="level" className="is-mobile">
      <Level.Side align="left">
        <Level.Item>
          <Icon icon="reply" size="small" />
          <Icon icon="retweet" size="small" />
          <Icon icon="heart" size="small" />
        </Level.Item>
      </Level.Side>
    </Level>
  </Media.Item>
</Media>

  );
}

export default About;
