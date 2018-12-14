import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import Modal from "react-modal";

import {
    addItemToBasket,
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

    toBuyItems(title, price) {
        if(this.props.authorized) {
            console.error("ACTION-title, price", title, price);
            this.props.addItemToBasket(title, price);
        } else {
            this.props.showInfoMessage();
        }

    }

    render() {
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
        return(

            <li key={this.props.key}>
                <h3>{this.props.item.title}</h3>
                <p dangerouslySetInnerHTML={{__html: "Status:  "+ this.props.item.status}}></p>
                <p dangerouslySetInnerHTML={{__html: "Price:  "+ this.props.item.price}}></p>
                {message}
                <button onClick={this.toBuyItems.bind(this, this.props.item.title, this.props.item.price)}>Add to basket</button>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.authorized,
        error: state.error,
        showedInfoMessage: state.showedInfoMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToBasket: (title, price) => {
            dispatch(addItemToBasket(title, price));
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