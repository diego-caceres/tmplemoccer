import React from "react";

import { connect } from "react-redux";
import { getLeagueTableById } from "../actions.js";

import PosTable from "./PosTable";
import TeamSquad from "./TeamSquad";
import Loader from "./Loader";

class Competition extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log("id de competicion es: " + id);
      this.props.fetchLeagueTableById(id);
    }
  }
  render() {
    return (
      <div>
        {" "}
        {this.props.loading
          ? <Loader />
          : <div>
              <p className="competition-list-title">
                {" "}Tabla de {this.props.leagueTable.leagueCaption}
              </p>
              <PosTable teams={this.props.leagueTable.standing} />

              {this.props.selectedTeamId > 0 && <TeamSquad />}

            </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    leagueTable: state.leagueTable,
    selectedTeamId: state.selectedTeamId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLeagueTableById: id => {
      return dispatch(getLeagueTableById(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Competition);
