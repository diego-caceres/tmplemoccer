import axios from "./config";

export const getCompetitions = () => {
  return axios
    .get("/competitions/")
    .then(response => {
      if (response.status === 200 && response.data) {
        return { success: true, competitions: response.data };
      }
    })
    .catch(err => {
      console.log(err);
      alert("error while loading user data");
      return { success: false };
    });
};

export const getLeagueTableById = id => {
  return axios
    .get(`/competitions/${id}/leagueTable`)
    .then(response => {
      if (response.status === 200 && response.data) {
        return { success: true, leagueTable: response.data };
      }
    })
    .catch(err => {
      console.log(err);
      alert("error while loading user data");
      return { success: false };
    });
};

export const getTeamPlayers = id => {
  return axios
    .get(`/teams/${id}/players`)
    .then(response => {
      if (response.status === 200 && response.data) {
        return { success: true, players: response.data.players };
      }
    })
    .catch(err => {
      console.log(err);
      alert("error while loading user data");
      return { success: false };
    });
};
