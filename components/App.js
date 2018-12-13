import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import SignUp from "../containers/SignUp";
import SignIn from "../containers/SignIn";

const App = () => {
    return (
        <Router>
            <>
                <Route exact path="/" component={Home}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
            </>
        </Router>
    );
};

export default App;