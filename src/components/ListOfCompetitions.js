import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCompetitions } from "../actions.js";

class ListOfCompetitions extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCompetitions();
  }

  render() {
    return (
      <div className="competition-list-container">
        <p className="competition-list-title">Available Competitions</p>
        <ul>
          {this.props.competitions.map((competition, index) => {
            return (
              <li key={index}>
                <div className="competition-container">
                  <div className="competition-title">
                    {competition.caption} - {competition.league} -{" "}
                    {competition.year}
                  </div>
                  <div>
                    Teams: {competition.numberOfTeams}
                  </div>
                  <div>
                    Progress in matches: {competition.currentMatchday} of{" "}
                    {competition.numberOfMatchdays}
                  </div>
                  <div className="competition-date">
                    Last updated: {competition.lastUpdated}
                  </div>
                  <div>
                    <Link
                      to={`/competition/${competition.id}`}
                      className="button"
                    >
                      See positions table
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    competitions: state.competitions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompetitions: () => {
      return dispatch(getCompetitions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCompetitions);
