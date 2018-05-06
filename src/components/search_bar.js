import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }
    }

    onSearchVideo(value) {
        this.setState({ term: value });
        this.props.onInput(value)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    type="text"
                    onChange={event => { this.onSearchVideo(event.target.value) }} />
            </div>
        )
    }
}

export default SearchBar;