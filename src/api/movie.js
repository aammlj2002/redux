import "dotenv/config";
import axios from "axios";
export const data = axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&`
);
