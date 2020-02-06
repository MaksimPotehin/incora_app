import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Users from "./page/users/Users";
import Posts from "./page/posts/Posts";
import Post from "./page/post/Post";



const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Users}/>
                <Route exact path='/posts/:id' component={Posts}/>
                <Route exact path='/posts/:id/:id' component={Post}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
};



export default  App

