import React from "react";
import PropTypes from "prop-types";

const Player = props => {
  return (
    <div className="player-info">
      <div className="avatar" />
      <div className="UserInfo-name">
        {props.name}
      </div>
      <div className="UserInfo-name">
        Position: {props.position}
      </div>
      <div className="UserInfo-name">
        Nationality: {props.nationality}
      </div>
    </div>
  );
};

export default Player;

Player.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  nationality: PropTypes.string,
  avatarUrl: PropTypes.string
};

Player.defaultProps = {
  name: "Not found",
  position: "Not found",
  nationality: "Not found",
  avatarUrl: ""
};
