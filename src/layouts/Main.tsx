import React from "react";
import { Switch, Route, } from "react-router-dom";

import Home from "../HomePage";
import About from "../AboutPage";
import NotFound from "../NotFoundPage";
import Post from "../PostPage";

import "./Main.css";

export default function Main() {
    return (
        <div id="main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/post/:postUrl*" component={Post}>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}
