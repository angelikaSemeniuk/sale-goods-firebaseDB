import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import {
    handleChangeOfTitle,
    handleChangeOfStatus,
    handleChangeOfPrice,
    handleSubmitOnForm
} from "../actions";

class FormForAddingItem extends React.Component {

    handleSubmit () {
        let ref = firebase.database().ref('items');
        let newItem = ref.push().set(
            {
                "title":  this.props.title,
                "status": this.props.status,
                "price": this.props.price
            }
        );
        this.props.setArrayOfItems(this.props.title, this.props.status, this.props.price);
        this.props.handleSubmitOnForm();
    }

    render () {
       return (
           <form onSubmit={this.handleSubmit.bind(this)}>
               <input
                   type="text"
                   value={this.props.title}
                   onChange={this.props.handleChangeOfTitle.bind(this)}
                   placeholder="title"
               />
               <select onChange={this.props.handleChangeOfStatus.bind(this)}>
                   <option value="none">none</option>
                   <option value="new">new</option>
                   <option value="used">used</option>
               </select>
               <input
                   type="text"
                   value={this.props.price}
                   onChange={this.props.handleChangeOfPrice.bind(this)}
                   placeholder="price"
               />
               <input type="submit" value="Submit"/>
           </form>
       );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        status: state.status,
        price: state.price
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeOfTitle: (event) => {
            dispatch(handleChangeOfTitle(event.target.value));
        },
        handleChangeOfStatus: (event) => {
            console.error("action-status", event.target.value);
            dispatch(handleChangeOfStatus(event.target.value));
        },
        handleChangeOfPrice: (event) => {
            dispatch(handleChangeOfPrice(event.target.value));
        },
        handleSubmitOnForm: () => {
            dispatch(handleSubmitOnForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormForAddingItem);