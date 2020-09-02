import React from "react";
import { Navbar} from 'react-bulma-components';
import img from "../../logo/logo_1.png"

import "./style.sass"

function RewardNavbar() {

  return (
    <Navbar

    >
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="/Dashboard">
          <img src={img} alt="EarnIt Logo"/>
        </Navbar.Item>     
      </Navbar.Brand> 

        <Navbar.Container>
          <Navbar.Item >
            <Navbar.Item href="/about">
              About 
            </Navbar.Item>
            <Navbar.Item href="/settings">
              Settings 
            </Navbar.Item>
          </Navbar.Item>
  
        </Navbar.Container>
        <Navbar.Container position="end">
            <Navbar.Item href="#">
                  Log Out
            </Navbar.Item>
          </Navbar.Container>
     
    </Navbar>
  )
};

export default RewardNavbar;