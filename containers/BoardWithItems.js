import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { setArrayOfItems } from "../actions";


class BoardWithItems extends React.Component {

    componentDidMount () {
        let ref = firebase.database().ref('items');
        ref.orderByKey().once("value")
            .then( (snapshot) => (
                snapshot.forEach( (item) => (
                    this.props.setArrayOfItems(item.key, item.val().status, item.val().price)
                ))
            ))
    }

    render() {
        const list = this.props.items.map((item, index) => (
            <li key={index}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{__html: "Status:  "+ item.status}}></p>
                <p dangerouslySetInnerHTML={{__html: "Price:  "+ item.price}}></p>
            </li>
        ));
       if(!this.props.haveGotItems) {
           return <div>Hello</div>
       } else {
           return <ul>{list}</ul>
       }
    }
}

const mapStateToProps = (state) => {
    console.error("action-ITEMS", state.items);
    return {
        items: state.items,
        haveGotItems: state.haveGotItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setArrayOfItems: (title, status, price) => {
            dispatch(setArrayOfItems(title, status, price));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardWithItems);