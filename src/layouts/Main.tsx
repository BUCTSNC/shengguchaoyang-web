import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import About from "../AboutPage";
import { CategoryPage } from "../CategoryPage";
import HomePage from "../HomePage";
import NotFound from "../NotFoundPage";
import Post from "../PostPage";
import ForNewStudents from "../ForNewStudents";
import "./Main.css";

export function Main() {
    const history = useHistory();
    return (
        <div className="main">
            <div onClick={() => history.push("for-new-students")}>我是新生</div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/for-new-students" exact component={ForNewStudents} />
                <Route path="/post/:postUrl*" component={Post} />
                <Route path="/cate/:category*" component={CategoryPage} />
                <Route path="/about" exact component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}
