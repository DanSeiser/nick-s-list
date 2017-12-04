import React from "react";
import ProfileNav from './components/ProfileNav';
import Jumbotron from "../components/Jumbotron";
import ProfileWidget from './components/ProfileWidget';

const Profile = () =>
    <ProfileNav />
    <div className='container-fluid'>
        <Jumbotron>
            <ProfileWidget />
        </Jumbotron>
    </div>; 

export default Profile;
