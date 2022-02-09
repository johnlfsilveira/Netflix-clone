import axios from "axios";

/** url base para fazer requests ao the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
