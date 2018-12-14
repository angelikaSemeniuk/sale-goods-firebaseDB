import React from "react";
import { connect } from "react-redux";


import BoardWithItems from "../containers/BoardWithItems";
import InputSearch from "../containers/InputSearch";
import PersonalCabinet from "../containers/PersonalCabinet";

import {
    handleChangeOnInput

} from "../actions";


class Home extends React.Component {

    render() {
        const inputSearch =
            <input
                type="search"
                value={this.props.inputValue}
                onChange={this.props.handleChangeOnInput.bind(this)}
                placeholder="Search item..."
            />;

        return(
            <>
                <div className="search-container">{inputSearch}</div>
                <PersonalCabinet/>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);