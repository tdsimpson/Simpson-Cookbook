import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddRecipePage from '../components/AddRecipePage';
import Image from "../components/Image";
import Header from "../components/Header";
import Home from "../components/Home";
import Settings from "../components/Settings";
import '../styles/Home.css';
import '../styles/index.css';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={AddRecipePage} />
                <Route exact path="/image" component={Image} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;