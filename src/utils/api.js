import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const api = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODRkNjEzYzIyNDlmMmM3YjFiMzkxMjE0NzJlOGY2NCIsInN1YiI6IjY0NzQ5YTEzOWFlNjEzMDEwNDViODZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gv4ECwENKszECeOrFqIeurioRtxxgAdKum-V0xF3Q9Q"
const headers = {
    Authorization: "bearer " + api,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
