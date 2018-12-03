import React from "react";
import { connect } from "react-redux";

import BoardWithItems from "../containers/BoardWithItems";
import InputSearch from "../containers/InputSearch";

import { handleChangeOnInput } from "../actions";

class App extends React.Component {
    render() {
        return(
            <>
                <div className="search-container">
                    <input
                        type="search"
                        value={this.props.inputValue}
                        onChange={this.props.handleChangeOnInput.bind(this)}
                        placeholder="Search movie..."
                    />
                </div>
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
        inputValue: state.inputValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeOnInput: (event) => {
            dispatch(handleChangeOnInput(event.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);