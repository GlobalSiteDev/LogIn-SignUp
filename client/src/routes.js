import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import LoginForm from './containers/LoginForm/LoginForm';
import UserProfile from './containers/UserProfile/UserProfile';

const routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
                <Route path="/user" exact component={UserProfile} />
            </Switch>
        </Layout>
    );
}

export default routes;
