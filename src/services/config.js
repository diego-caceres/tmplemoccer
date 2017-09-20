import axios from "axios";

const accessToken = "62578188f0534fab8bb9757a66e383dd";

const axInstance = axios.create({
  baseURL: "http://api.football-data.org/v1",
  headers: {
    "X-Auth-Token": accessToken,
    "Content-Type": "application/json"
  }
});

export default axInstance;
