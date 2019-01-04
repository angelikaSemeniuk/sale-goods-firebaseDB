import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import firebase from "firebase";
import {addItemToBasket, closeInfoMessage, showInfoMessage} from "../actions";


class PersonalBasket extends React.Component {
    render() {
        const users = JSON.parse(localStorage.getItem("users"));
        let list = [];
        users.map((person) => {
            if(person.name === this.props.currentUser) {
                person.basket.map((item) => {
                    list.push(item);
                })}
        });

        console.error("action-LIST", list);
        const myBasket = list.map((item, index) => {
            return(
                <li key={index}>
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: "Price:  "+ item.price}}></p>
                </li>
            );
        });

        return(
            <>
                <p>My items to buy</p>
                <div>{myBasket}</div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.authorized,
        error: state.error,
        showedInfoMessage: state.showedInfoMessage,
        mybasket: state.mybasket,
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToBasket: (item, index) => {
            dispatch(addItemToBasket(item, index));
        },
        showInfoMessage: () => {
            dispatch(showInfoMessage());
        },
        closeInfoMessage: () => {
            dispatch(closeInfoMessage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBasket);