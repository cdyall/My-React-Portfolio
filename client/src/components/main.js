import React from "react";
import { Switch, Route } from "react-router-dom"

import Home from "./homepage";
import Resume from "./resume";
import About from "./aboutme";
import Project from "./projects";
import Contact from "./contact";


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        {/* <Route path="/aboutme" component={About}/> */}
        <Route path="/projects" component={Project}/>
        {/* <Route path="/contact" component={Contact}/> */}
    </Switch>

)

export default Main;