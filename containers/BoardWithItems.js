import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import ListItem from "../containers/ListItem";
import {
    setArrayOfItems,
    getClearArrayOfItems,
    catchError,
    addItemToBasket
} from "../actions";


class BoardWithItems extends React.Component {

    componentDidMount () {
        let ref = firebase.database().ref('items');
        ref.orderByKey().once("value")
            .then( (snapshot) => (
                snapshot.forEach( (item) => (
                    this.props.setArrayOfItems(item.val().title, item.val().status, item.val().price)
                ))
            ))
    }

    componentWillUnmount () {
        this.props.getClearArrayOfItems();

    }

    render() {
        const list = this.props.items.map((item, index) => (
            <ListItem
                item={item}
                key={index}
                index={index}
            />
        ));
       if(!this.props.haveGotItems) {
           return <div>Hello</div>
       } else {
           return(
               <>
                   <ul>{list}</ul>
               </>
           )
       }
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        haveGotItems: state.haveGotItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setArrayOfItems: (title, status, price) => {
            dispatch(setArrayOfItems(title, status, price));
        },
        getClearArrayOfItems: () => {
           dispatch(getClearArrayOfItems());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardWithItems);