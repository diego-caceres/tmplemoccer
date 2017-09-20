import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { selectTeamId } from "../actions.js";

class PosTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.teamName}</td>
        <td>{this.props.wins}</td>
        <td>{this.props.draws}</td>
        <td>{this.props.losses}</td>
        <td>{this.props.goals}</td>
        <td>{this.props.goalsAgainst}</td>
        <td>{this.props.goalDifference}</td>
        <td>{this.props.playedGames}</td>
        <td>{this.props.points}</td>
        <td>
          <Button
            bsStyle="info"
            onClick={() =>
              this.props.selectTeamIdLocal(this.props.id, this.props.teamName)}
          >
            +
          </Button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTeamIdLocal: (id, name) => {
      return dispatch(selectTeamId(id, name));
    }
  };
};

export default connect(null, mapDispatchToProps)(PosTableRow);
