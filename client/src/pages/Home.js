import React from "react";

import {useIsAuthenticated, useLogout} from "../utils/auth";

function Home() {
    const isAuth=useIsAuthenticated();
    const logout=useLogout();
    
    return (
        <section class="hero">    
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Rewarding App</h1>
                    {
                        isAuth
                            ? <button class="button level-left" onClick={logout}>Logout</button>
                            : <button class="button level-left"><a href="/login">Login</a></button>
                    }

                    <br />
                    <div class="field">
                        <p class="control">
                            <button class="button level-right"><a href="/register">Register</a></button>
                        </p>
                    </div>  
                </div>
            </div>
        </section>    
    )
}

export default Home;