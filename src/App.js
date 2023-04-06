import React from "react";
import { CardList } from "./cardList.js";
import { SearchBox } from "./searchBox.js";
//import { robots } from "./robotsNames.js";
import { Scroll } from "./scroll.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  filterRobots() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return (
        robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase()) ||
        robot.email.toLowerCase().includes(this.state.searchField.toLowerCase())
      );
    });
    return filteredRobots;
  }

  render() {
    const filteredRobots = this.filterRobots();

    if (this.state.robots.length === 0) {
      return <h1 className="tc green f1">Loading...</h1>;
    } else
      return (
        <div>
          <h1 className="tc green f1">RoboFriends</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          {filteredRobots.length === 0 ? (
            <div className="vh-100 flex flex-column justify-center items-center">
              <h1 className="tc red f1 pb6">
                There are no robots with this name or email...
              </h1>
            </div>
          ) : (
            <Scroll>
              <CardList
                robots={filteredRobots}
                search={this.state.searchField}
              />
            </Scroll>
          )}
        </div>
      );
  }
}

export { App };
