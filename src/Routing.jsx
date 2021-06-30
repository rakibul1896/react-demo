import React from 'react';
import Navbar from './Navbar'
import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

const Routing = () => {
    return (
        <div >
            <Navbar/>
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/about'><About/></Route>
                <Route path='/users'><Users/></Route>
            </Switch>
        </div>
    )
}

export default Routing;




