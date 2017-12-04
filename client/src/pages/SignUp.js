import React from "react";
import Jumbotron from "../components/Jumbotron";
import AccountCreate from './components/AccountCreate';

const SignUp = () =>
<div className='container-fluid'>
    <Jumbotron>
        <AccountCreate />
    </Jumbotron>
</div>;

export default SignUp;
