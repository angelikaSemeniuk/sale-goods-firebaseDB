import React from "react";
import { connect } from "react-redux";

import { getClearArrayOfSearchedItems } from "../actions";

class InputSearch extends React.Component {

    componentWillUnmount () {
        this.props.getClearArrayOfSearchedItems();

    }

    render () {
        let filteredItems = this.props.searchedItems.filter(
            (item) => {
                return item.title.toLowerCase().indexOf(this.props.inputValue.toLowerCase()) !== -1
            }
        );
        let listOfItems = filteredItems.map((item, index) => (
            <li key={index}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{__html: "Status:  "+ item.status}}></p>
                <p dangerouslySetInnerHTML={{__html: "Price:  "+ item.price}}></p>
            </li>
        ));
        return (
            <ul>{listOfItems}</ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        searchedItems: state.searchedItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClearArrayOfSearchedItems: () => {
            dispatch(getClearArrayOfSearchedItems());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);