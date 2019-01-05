import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import firebase from "firebase";
import {
    addItemToBasket,
    closeInfoMessage,
    showInfoMessage,
    deleteItemFromBasket
} from "../actions";


class PersonalBasket extends React.Component {


    render() {

        const users = JSON.parse(localStorage.getItem("users"));
        console.error("action-this.props.basket.length", this.props.basket.length);
        if(this.props.basket.length === 0) {
            console.error("action-inside");
            users.forEach((person) => {
                if(person.name === this.props.currentUser) {
                    person.basket.forEach((item, index) => {
                        this.props.addItemToBasket(item, index)
                    })}
            })
        }

        const myBasket = this.props.basket.map((item, index) => {
            return(
                <li key={index}>
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: "Price:  "+ item.price}}></p>
                    <button onClick={this.props.deleteItemFromBasket.bind(this, index)}>Delete from basket</button>
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
        basket: state.basket,
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToBasket: (item, index) => {
            dispatch(addItemToBasket(item, index));
        },
        deleteItemFromBasket: (index) => {
            dispatch(deleteItemFromBasket(index));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBasket);