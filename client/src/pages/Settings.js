import React from "react";
import { Icon, Content, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Settings() {

  return (
<div class="container">
  <div class="notification">

    <Button className="button"><a href="/dashboard">Dashboard</a></Button> 
    <br></br>
    <br></br>
    <Button className="button"><a href="/add-children">Add Children</a></Button>   
    <br></br>
    <br></br>
    <Button className="button"><a href="/settings">My Account</a></Button>
    <br></br>
    <br></br>
    <Button className="button"><a href="/settings">Privacy</a></Button> 
    <br></br>
    <br></br>
    <Button className="button"><a href="/settings">Help Center</a></Button> 
      
  </div>
</div>
  );
}


export default Settings;