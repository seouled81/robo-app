import React, { Component } from "react";
import { connect } from 'react-redux';

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import "./App.css";

import { setSearchfield, requestRobots } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isPending, error, searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>;
    } 

    if (error) {
      return <h1 style={{color: 'white', fontFamily: 'sans-serif', fontWeight: '300', fontSize: '4rem'}}>{`Ooops! Something went wrong. ${error.message}`}</h1>
    }
      
    return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );

  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
