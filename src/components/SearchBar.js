import React from "react";

class SearchBar extends React.Component {
  state = { term: "", loading: false };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <div className="fields">
              <div className="fourteen wide field">
                <div className="ui icon input loading">
                  <input
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value })}
                    type="text"
                    placeholder="Search..."
                  />
                  {this.state.loading && <i className="search icon"></i>}
                </div>
              </div>
              <div className="two wide field">
                <button type="submit" className="ui primary button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
