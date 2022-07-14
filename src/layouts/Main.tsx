import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../AboutPage";
import { CategoryPage } from "../CategoryPage";
import HomePage from "../HomePage";
import NotFound from "../NotFoundPage";
import Post from "../PostPage";
import ForNewStudents from "../ForNewStudents";
import SearchPage from "../SearchPage";
import "./Main.css";

export function Main() {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/search" exact component={SearchPage} />
                <Route
                    path="/for-new-students"
                    exact
                    component={ForNewStudents}
                />
                <Route path="/post/:postUrl*" component={Post} />
                <Route path="/cate/:category*" component={CategoryPage} />
                <Route path="/about" exact component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}
