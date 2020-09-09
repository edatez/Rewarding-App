import React from "react";
import { Columns, Navbar} from 'react-bulma-components';


import "./style.sass";
import { useLogout, useIsAuthenticated } from "../../utils/auth";

function RewardNavbar() {

  const logout = useLogout();
  const isAuthorized = useIsAuthenticated ();

  return (
    <Columns className="is-mobile">
      <Columns.Column> 
        <Navbar className="navbar">
            <Navbar.Brand>
              {
                isAuthorized
                  ? (
                    <Navbar.Item className="img" renderAs="a" href="/Dashboard">
                      <img style={{ maxHeight: 50 }} src="/images/earnit_masked.png" alt="EarnIt Logo"/>
                    </Navbar.Item>
                  )

                  : (
                    <Navbar.Item className="img" renderAs="a" href="/">
                      <img style={{ maxHeight: 50 }} src="/images/earnit_masked.png" alt="EarnIt Logo"/>
                    </Navbar.Item>
                  )
              
              }    
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>          
            </Navbar.Brand> 

            <Navbar.Container position="end">
              
              <Navbar.Item href="/about">
                About 
              </Navbar.Item>
          
              
              <Navbar.Item href="/settings">
                Settings 
              </Navbar.Item>
              {
                isAuthorized
                  ? (
                    <Navbar.Item onClick={logout} >
                      Logout
                   </Navbar.Item>
                  )

                  : (
                    <Navbar.Item href="/login" >
                  Login
                  </Navbar.Item>
                  )
              
              }   
            </Navbar.Container>         
              
        </Navbar>
        <hr></hr>
      </Columns.Column>
    </Columns>
  )
};

export default RewardNavbar;