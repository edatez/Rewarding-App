import React from "react";
import { Columns, Navbar} from 'react-bulma-components';
import img from "../../logo/logo_1.png"

import "./style.sass"

function RewardNavbar() {

  return (
    <Columns className="is-mobile">
      <Columns.Column className="is-half is-offset-one-quarter is-centered">
        <Navbar>

          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/Dashboard">
              <img src={img} alt="EarnIt Logo"/>
            </Navbar.Item>     
          </Navbar.Brand> 

          <Navbar.Container position="end">

            <Navbar.Item >
              <Navbar.Item href="/about">
                About 
              </Navbar.Item>
            </Navbar.Item> 

            <Navbar.Item >
              <Navbar.Item href="/settings">
                Settings 
              </Navbar.Item>
            </Navbar.Item>

            <Navbar.Item >
              <Navbar.Item href="#">
                Log Out
              </Navbar.Item>
            </Navbar.Item>
            
          </Navbar.Container>         
        
        </Navbar>
        <hr></hr>
      </Columns.Column>  
    </Columns>
  )
};

export default RewardNavbar;