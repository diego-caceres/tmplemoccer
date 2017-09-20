import * as services from "./services";

export const types = {
  TOGGLE_LOADING_DATA: "TOGGLE_LOADING_DATA",
  FETCH_COMPETITIONS_SUCCESS: "FETCH_COMPETITIONS_SUCCESS",
  FETCH_LEAGUE_TABLE_SUCCESS: "FETCH_LEAGUE_TABLE_SUCCESS",
  SELECT_TEAM_ID: "SELECT_TEAM_ID",
  FETCH_TEAM_PLAYERS_SUCCESS: "FETCH_TEAM_PLAYERS_SUCCESS"
};

//actions creators
const toggleLoadingData = flag => {
  return {
    type: types.TOGGLE_LOADING_DATA,
    payload: flag
  };
};

const receiveCompetitions = competitions => {
  return {
    type: types.FETCH_COMPETITIONS_SUCCESS,
    payload: { competitions: competitions }
  };
};

const receiveTableLeague = leagueTable => {
  return {
    type: types.FETCH_LEAGUE_TABLE_SUCCESS,
    payload: { leagueTable: leagueTable }
  };
};

export const selectTeamId = (id, name) => {
  return {
    type: types.SELECT_TEAM_ID,
    payload: { id: id, name: name }
  };
};

const receiveTeamPlayers = players => {
  return {
    type: types.FETCH_TEAM_PLAYERS_SUCCESS,
    payload: { players: players }
  };
};

//THUNKS

export const getCompetitions = () => {
  return dispatch => {
    dispatch(toggleLoadingData(true));
    services
      .getCompetitions()
      .then(
        response => {
          if (response.success)
            dispatch(receiveCompetitions(response.competitions));
        },
        error => {}
      )
      .then(() => dispatch(toggleLoadingData(false)));
  };
};

export const getLeagueTableById = id => {
  return dispatch => {
    dispatch(toggleLoadingData(true));
    services
      .getLeagueTableById(id)
      .then(response => {
        if (response.success)
          dispatch(receiveTableLeague(response.leagueTable));
      })
      .catch(error => {})
      .then(() => dispatch(toggleLoadingData(false)));
  };
};

export const fetchSelectedTeamPlayers = teamId => {
  return dispatch => {
    services
      .getTeamPlayers(teamId)
      .then(response => {
        if (response.success) dispatch(receiveTeamPlayers(response.players));
      })
      .catch(error => {});
  };
};
