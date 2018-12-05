import React from "react";
import { connect } from "react-redux";

import BoardWithItems from "../containers/BoardWithItems";
import InputSearch from "../containers/InputSearch";
import FormForAddingItem from "../containers/FormForAddingItem";

import {addItemFunc, handleChangeOnInput} from "../actions";

class App extends React.Component {
    render() {
        return(
            <>
                <div className="search-container">
                    <input
                        type="search"
                        value={this.props.inputValue}
                        onChange={this.props.handleChangeOnInput.bind(this)}
                        placeholder="Search item..."
                    />
                </div>
                { !this.props.addItem ?
                    <button onClick={this.props.addItemFunc.bind(this)}>Add item</button> :
                    <FormForAddingItem/>
                }
                {this.props.inputValue ?
                    <InputSearch/> :
                    <BoardWithItems/>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        addItem: state.addItem
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeOnInput: (event) => {
            dispatch(handleChangeOnInput(event.target.value));
        },
        addItemFunc: () => {
            dispatch(addItemFunc());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);