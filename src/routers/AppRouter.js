import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/Home";
import Image from "../components/Image";
import Settings from "../components/Settings";
import Header from "../components/Header";
import '../styles/Home.css';
import '../styles/index.css';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/image" component={Image} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;