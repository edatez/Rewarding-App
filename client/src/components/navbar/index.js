import React from "react";
import { Columns, Navbar} from 'react-bulma-components';
import $ from "jquery";


import "./style.sass";
import { useLogout, useIsAuthenticated } from "../../utils/auth";

function RewardNavbar() {

  const logout = useLogout();
  const isAuthorized = useIsAuthenticated ();
  

  $(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

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
              <div class="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </div> 

            </Navbar.Brand> 

            <Navbar.Container position="end">

              <Navbar className="navbar-menu">
              
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

              </Navbar>  

            </Navbar.Container>         
              
        </Navbar>
        <hr></hr>
      </Columns.Column>
    </Columns>
  )
};

export default RewardNavbar;