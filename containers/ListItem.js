import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import Modal from "react-modal";

import {
    addItemToBasket,
    addItemToBasketInTheLocalStorage,
    showInfoMessage,
    closeInfoMessage
} from "../actions";

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minHeight: "200px",
        fontSize: "20px",
    }
};

Modal.setAppElement(document.getElementById("root"));


class ListItem extends React.Component {

    toBuyItems(item, index) {
        if(this.props.authorized) {
            this.props.addItemToBasket(item, index);
            this.props.addItemToBasketInTheLocalStorage(item);
        } else {
            this.props.showInfoMessage();
        }

    }

    render() {
        const users = JSON.parse(localStorage.getItem("users"));
        const error = "To buy items you need to be authorized. Go to your personal cabinet ";
        const message =
            <Modal
                isOpen={this.props.showedInfoMessage}
                onRequestClose={this.props.closeInfoMessage}
                style={modalStyle}
            >
                <p className="error">{error}</p>
                <button onClick={this.props.closeInfoMessage.bind(this)}>Close</button>
            </Modal>;
        const addedToBasketInLocalStorage = () => {
            let addedToBasket = false;
            users.map((obj) => {
                obj.basket.filter((item) => {
                    if(item.title === this.props.item.title) {
                        addedToBasket = true;
                    }
                });
            });
            return addedToBasket
        };
        const alreadyAddedToMyBasket = this.props.basket.filter((item) => {
            if(item.title === this.props.item.title) {
                return item.title
            }
        });
        return(

            <li key={this.props.key}>
                <h3>{this.props.item.title}</h3>
                <p dangerouslySetInnerHTML={{__html: "Status:  "+ this.props.item.status}}></p>
                <p dangerouslySetInnerHTML={{__html: "Price:  "+ this.props.item.price}}></p>
                {message}
                { addedToBasketInLocalStorage() || alreadyAddedToMyBasket.length || this.props.item.addedToBasket ?
                    <button disabled>Add to basket</button> :
                    <button onClick={this.toBuyItems.bind(this, this.props.item, this.props.index)}>Add to basket</button>
                }
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.authorized,
        error: state.error,
        showedInfoMessage: state.showedInfoMessage,
        basket: state.basket
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToBasket: (item, index) => {
            dispatch(addItemToBasket(item, index));
        },
        addItemToBasketInTheLocalStorage: (item) => {
            dispatch(addItemToBasketInTheLocalStorage(item))
        },
        showInfoMessage: () => {
            dispatch(showInfoMessage());
        },
        closeInfoMessage: () => {
            dispatch(closeInfoMessage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);