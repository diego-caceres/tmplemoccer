import React from "react";
import { Table } from "react-bootstrap";
import PosTableRow from "./PosTableRow";

//<table className="pos-table">

const getId = team => {
  const parts = team._links.team.href.split("/");
  return parts[parts.length - 1];
};

class PosTable extends React.Component {
  render() {
    return (
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Goals</th>
            <th>Goals Agains</th>
            <th>Goals Diff</th>
            <th>Played Matches</th>
            <th>Points</th>
            <th>See Squad</th>
          </tr>
        </thead>
        <tbody>
          {this.props.teams.map((team, index) => {
            return (
              <PosTableRow
                key={index}
                id={getId(team)}
                position={team.position}
                teamName={team.teamName}
                wins={team.wins}
                draws={team.draws}
                losses={team.losses}
                goals={team.goals}
                goalsAgainst={team.goalsAgainst}
                goalDifference={team.goalDifference}
                playedGames={team.playedGames}
                points={team.points}
              />
            );
          })}
        </tbody>
      </Table>
    );
  }
}
export default PosTable;

PosTable.defaultProps = {
  teams: []
};
