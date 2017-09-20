import React from "react";
import Player from "./Player";
import { connect } from "react-redux";
import { fetchSelectedTeamPlayers } from "../actions";

class TeamSquad extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedTeamPlayersLocal(this.props.selectedTeamId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedTeamId !== this.props.selectedTeamId)
      this.props.fetchSelectedTeamPlayersLocal(this.props.selectedTeamId);
  }
  render() {
    return (
      <div>
        {this.props.players.length === 0
          ? <h1> No players found for team {this.props.selectedTeamName}</h1>
          : <div>
              <h1 className="players-title">
                {" "}Team {this.props.selectedTeamName}
              </h1>
              <div className="players-container">

                {this.props.players.map((player, index) => {
                  return (
                    <Player
                      key={index}
                      name={player.name}
                      nationality={player.nationality}
                      position={player.position}
                    />
                  );
                })}
              </div>
            </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTeamId: state.selectedTeamId,
    selectedTeamName: state.selectedTeamName,
    players: state.selectedTeamPlayers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSelectedTeamPlayersLocal: selectedTeamId =>
      dispatch(fetchSelectedTeamPlayers(selectedTeamId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSquad);
