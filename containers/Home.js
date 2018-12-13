import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import firebase from "firebase";



import BoardWithItems from "../containers/BoardWithItems";
import InputSearch from "../containers/InputSearch";
import FormForAddingItem from "../containers/FormForAddingItem";

import {
    addItemFunc,
    handleChangeOnInput,
    openModalWindow,
    closeModalWindow,
    handleSignOut,
    catchError
} from "../actions";

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minHeight: "300px",
        fontSize: "30px",
    }
};

Modal.setAppElement(document.getElementById("root"));

class Home extends React.Component {

    handleSignOut() {
        firebase.auth().signOut()
            .then( () => (
                this.props.handleSignOut()
            ))
            .catch((error) => this.props.catchError(error))

    }

    render() {
        const inputSearch =
            <input
                type="search"
                value={this.props.inputValue}
                onChange={this.props.handleChangeOnInput.bind(this)}
                placeholder="Search item..."
            />;

        const modalWindow =
            <Modal
                isOpen={this.props.openedModalWindow}
                onRequestClose={this.props.closeModalWindow}
                style={modalStyle}
            >
                <button onClick={this.props.closeModalWindow.bind(this)}>Close</button>
                <Link to="/sign-up">Sign Up</Link>
                <p className="footer">Has already an account? Then click <Link to="/sign-in">Sign In</Link></p>
            </Modal> ;

        const  personalCabinet =
              !this.props.authorized  ?
                  <p onClick={this.props.openModalWindow.bind(this)}>Personal Cabinet</p> :
                  <>
                      {this.props.error && <p className="error" dangerouslySetInnerHTML={{__html: this.props.error}}></p>}
                      <button onClick={this.handleSignOut.bind(this)}>Sign out</button>
                      <p dangerouslySetInnerHTML={{__html: "Welcome, " + this.props.currentUser}}></p>
                  </>;
        return(
            <>
                <div className="search-container">{inputSearch}</div>
                <div className="personal-cabinet">{personalCabinet}</div>
                { !this.props.addItem ?
                    <button onClick={this.props.addItemFunc.bind(this)}>Add item</button> :
                    <FormForAddingItem/>
                }
                {this.props.inputValue ?
                    <InputSearch/> :
                    <BoardWithItems/>
                }
                <>{modalWindow}</>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        addItem: state.addItem,
        openedModalWindow: state.openedModalWindow,
        authorized: state.authorized,
        error: state.error,
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeOnInput: (event) => {
            dispatch(handleChangeOnInput(event.target.value));
        },
        addItemFunc: () => {
            dispatch(addItemFunc());
        },
        openModalWindow: () => {
            dispatch(openModalWindow());
        },
        closeModalWindow: () => {
            dispatch(closeModalWindow());
        },
        handleSignOut: () => {
            dispatch(handleSignOut());
        },
        catchError: (error) => {
            dispatch(catchError(error));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);