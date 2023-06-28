import React from "react";
import { CardList } from "../components/cardList.js";
import { SearchBox } from "../components/searchBox.js";
import { robots } from "../components/robotsNames.js";
import { Scroll } from "../components/Scroll/scroll.js";
import { PlusSign } from "../components/robotAdd/addCard.js";
import { ErrorBoundary } from "../components/componentEror.js";
import Popup from "../components/Popup/Popup.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
      cliked: false,
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

    if (this.state.robots.length === 0) {
      return <h1 className="tc green f1">Loading...</h1>;
    } else
      return (
        <>
          <div>
            <h1 className="tc green f1">RoboFriends </h1>
            <SearchBox SearchChange={this.onSearchChange} />
            {filteredRobots.length === 0 ? (
              <div className="vh-100 flex flex-column justify-center items-center">
                <h1 className="tc red f1 pb6">
                  There are no robots with this name or email...
                </h1>
              </div>
            ) : (
              <Scroll>
                <ErrorBoundary>
                  <CardList
                    robots={filteredRobots}
                    search={this.state.searchField}
                  />
                  <PlusSign cliked={this.state.cliked} />
                </ErrorBoundary>
              </Scroll>
            )}
          </div>

          <Popup cliked={this.state.cliked} />
        </>

      );
  }
}

export { App };
