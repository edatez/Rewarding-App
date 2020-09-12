import React from "react";
import { Content, Button } from "react-bulma-components";


function Settings() {
  return (
 
     <Content className="has-text-centered"> 
      <p>
     
        <a href="/login">Start Your Motivation!</a>. .
      </p>
      <Button className="is-primary is-rounded"><a className="has-text-white" href="/add-children">Add Children</a></Button>
      <br></br>
      <br></br>
      <Button className="is-primary is-rounded"><a className="has-text-white" href="/create-rewards">Create Rewards</a></Button>
      <br></br>
      <br></br>
      <Button className="is-primary is-rounded"><a className="has-text-white" href="/create-activities">Create Activities</a></Button>
      <br></br>
      <br></br>
      <Button className="is-primary is-rounded" ><a className="has-text-white" href="/redeem-rewards">Redeem Rewards</a></Button>
      <br></br>
      <br></br>
      <Button className="is-primary is-rounded"><a className="has-text-white" href="/dashboard">Dashboard</a></Button>
    </Content> 

  );
}


export default Settings;