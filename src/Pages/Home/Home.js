import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../../Component/Header/Header";
import Explore from "../Explore/Explore";
import NewHome from "../NewHome/NewHome";
import Profile from "../Profile/Profile";

const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <Switch>
                <Route exact path='/' component={NewHome} />
                <Route exact path='/explore' component={Explore} />
                <Route path='/:username' component={Profile} />
            </Switch>
        </div>
    )
}


export default Home;