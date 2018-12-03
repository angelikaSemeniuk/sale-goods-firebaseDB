import React from "react";
import BoardWithItems from "../containers/BoardWithItems";
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
                <BoardWithItems/>
            </>
        );
    }
}

export default App;