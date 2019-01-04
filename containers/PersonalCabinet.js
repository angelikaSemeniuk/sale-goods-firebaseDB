import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Modal from "react-modal";
import firebase from "firebase";
import {
    checkOnAuthStateChanged,
    addItemFunc,
    openModalWindow,
    closeModalWindow,
    handleSignOut,
    catchError,
    setCurrentUser
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

class PersonalCabinet extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged( user => {
            this.props.checkOnAuthStateChanged(user);
            if(user){
                this.setCurrentUser();
            }
        });
    }

    handleSignOut() {
        firebase.auth().signOut()
            .then( () => (
                this.props.handleSignOut()
            ))
            .catch((error) => this.props.catchError(error))

    }

    setCurrentUser() {
        const users = JSON.parse(localStorage.getItem("users"));
        const { currentUser } = firebase.auth();
        this.props.setCurrentUser(currentUser.email);
    }

    render() {
        const  personalCabinet =
            !this.props.authorized  ?
                <p onClick={this.props.openModalWindow.bind(this)}>Personal Cabinet</p> :
                <>
                    {this.props.error && <p className="error" dangerouslySetInnerHTML={{__html: this.props.error}}></p>}
                    <p dangerouslySetInnerHTML={{__html: "Welcome, " + this.props.currentUser}}></p>
                    <button onClick={this.handleSignOut.bind(this)}>Sign out</button>
                    <Link to="/my-items">My items</Link>
                    <Link to="/my-basket">My basket</Link>

                    { !this.props.addItem ?
                        <button onClick={this.props.addItemFunc.bind(this)}>Add new item</button> :
                        <Redirect to="add-item"/>
                    }
                </>;
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

        return (
            <>
                <div className="personal-cabinet">{personalCabinet}</div>
                <div>{modalWindow}</div>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        addItem: state.addItem,
        openedModalWindow: state.openedModalWindow,
        authorized: state.authorized,
        error: state.error,
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
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
        },
        checkOnAuthStateChanged: (user) => {
            dispatch(checkOnAuthStateChanged(user));
        },
        setCurrentUser: (currentUser) => {
            dispatch(setCurrentUser(currentUser));
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);