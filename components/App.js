import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import SignUp from "../containers/SignUp";
import SignIn from "../containers/SignIn";
import FormForAddingItem from "../containers/FormForAddingItem";
import PersonalBasket from "../containers/PersonalBasket";
import PersonalAddedItems from "../containers/PersonalAddedItems";

const App = () => {
    return (
        <Router>
            <>
                <Route exact path="/" component={Home}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/add-item" component={FormForAddingItem}/>
                <Route path="/my-basket" component={PersonalBasket}/>
                <Route path="/my-items" component={PersonalAddedItems}/>
            </>
        </Router>
    );
};

export default App;