import axios from "axios";
import React, { useEffect } from "react";

function Home() {
    const apiKey = "dbfc6703";
    const searchKey = "Harry";
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(
                    `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchKey}"`
                );
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, []);
    return <div>Home</div>;
}

export default Home;
