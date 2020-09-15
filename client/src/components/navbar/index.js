import React from "react";
import { Columns, Navbar} from 'react-bulma-components';

import "./style.sass";
import { useLogout, useIsAuthenticated } from "../../utils/auth";

function RewardNavbar() {

  const logout = useLogout();
  const isAuthorized = useIsAuthenticated ();
  
  function navbarBurger () {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <Columns className="is-mobile" >
      <Columns.Column className="ml-0"> 
        <Navbar>
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
                      <img style={{ maxHeight: 50}} src="/images/earnit_masked.png" alt="EarnIt Logo"/>
                    </Navbar.Item>
                  )
              
              }    
              <div className="navbar-burger" onClick={()=>navbarBurger()}>
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
                
                <Navbar.Item className="has-dropdown is-hoverable" value="Settings" >                  
                  <a className="navbar-link" href="/settings">Settings</a> 
                  <Navbar.Dropdown>
                    <Navbar.Item><a className="has-text-primary" href="/Dashboard">Dashboard</a></Navbar.Item>
                    <Navbar.Item><a className="has-text-primary" href="/add-children">Add Children</a></Navbar.Item>
                    <Navbar.Item><a className="has-text-primary" href="/create-activities">Create Activities</a></Navbar.Item>
                    <Navbar.Item><a className="has-text-primary" href="/create-rewards">Create Rewards</a></Navbar.Item>
                    <Navbar.Item><a className="has-text-primary" href="/add-points">Add Points</a></Navbar.Item>
                    <Navbar.Item><a className="has-text-primary" href="/redeem-rewards">Redeem Rewards</a></Navbar.Item>
                  </Navbar.Dropdown>
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
        <hr style={{ margin: 0, backgroundColor: 'rgba(67,170,139,.2)'}}></hr>
      </Columns.Column>
    </Columns>
  )




  
};

export default RewardNavbar;