"use strict";
import React from "react";
import { CardList } from "./cardList.js";
import { SearchBox } from "./searchBox.js";
import { robots } from "./robotsNames.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
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

    return (
      <div>
        <h1 className="tc green f1">RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        {filteredRobots.length === 0 ? (
          <div className="vh-100 flex flex-column justify-center items-center">
            <h1 className="tc white ">
              There are no robots with this name or email...
            </h1>
          </div>
        ) : (
          <CardList robots={filteredRobots} search={this.state.searchField} />
        )}
      </div>
    );
  }
}

export { App };
