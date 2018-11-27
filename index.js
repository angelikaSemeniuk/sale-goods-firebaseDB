import React from "react";
import ReactDOM from "react-dom";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/index";
import App from "./components/App";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCjs7wRYrjU9utNFPExHkn1aG4QfAfjvZc",
    authDomain: "sale-goods-firebasedb.firebaseapp.com",
    databaseURL: "https://sale-goods-firebasedb.firebaseio.com",
    projectId: "sale-goods-firebasedb",
    storageBucket: "sale-goods-firebasedb.appspot.com",
    messagingSenderId: "232678494979"
};
firebase.initializeApp(config);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);