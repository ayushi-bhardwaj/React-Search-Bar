import React, { Component } from "react";
import { connect } from "react-redux";
import AddData from "./AddData";
import NameContainer from "./NameContainer";
class App extends Component {
  state = {
    searchTerm: "",
  };

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  dynamicSearch = () => {
    const { data } = this.props;
    if (this.state.searchTerm == "") return [];
    return data.filter((name) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };
  render() {
    const { data } = this.props;
    console.log("Props", this.props);
    console.log(data);
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="Search"
          />
          <br></br>
          <h3>Search Result</h3>
          <NameContainer names={this.dynamicSearch()} />
        </div>
        <AddData />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(App);
