import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Image from "./components/Image";
import Settings from "./components/Settings";
import Header from "./components/Header";

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/image" component={Image} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;