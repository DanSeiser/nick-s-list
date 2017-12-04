import React from "react";
import Jumbotron from "../components/Jumbotron";

const Home = () =>
<div className='container-fluid'>
    <Jumbotron>
        <h1><span class="fa fa-lock"></span>Nick's List</h1>

        <p>Login or Register:</p>

        <a href="/login" class="btn btn-default"><span class="fa fa-user"></span>Login</a>
        <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span>Register</a>
    </Jumbotron>
</div>;

export default Home;
