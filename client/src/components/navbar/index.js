import React from "react";
import { Navbar} from 'react-bulma-components';
import img from "../../logo/earnit_masked.png";

import "./style.sass";
import { useLogout } from "../../utils/auth";

function RewardNavbar() {

  const logout = useLogout();

  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <Navbar.Item className="img" renderAs="a" href="/Dashboard">
          <img style={{ maxHeight: 50 }} src={img} alt="EarnIt Logo"/>
        </Navbar.Item>     
      </Navbar.Brand> 

        <Navbar.Container position="end">
        <Navbar.Item href="/about">
              About 
            </Navbar.Item>
         
            
            <Navbar.Item href="/settings">
              Settings 
            </Navbar.Item>
            <Navbar.Item onClick={logout} >
                  Log Out
            </Navbar.Item>
          </Navbar.Container>
     
    </Navbar>
  )
};

export default RewardNavbar;