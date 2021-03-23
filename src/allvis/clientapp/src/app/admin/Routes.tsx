import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import AdminShell from "./AdminShell"
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                 
                    <Route path="/AdminShell" component={AdminShell} />
                 
                </Switch>
            </Router>
        )
    }
}
