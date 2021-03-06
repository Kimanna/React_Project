import React, { Component, useEffect } from 'react';
import Movie from '../components/Movie';


function Home() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`
            )).json()
        setMovies(json.data.movies)
        setLoading(false)

    }
    useEffect(() => {
        getMovies()
    }, [])
    console.log("🚀 ~ file: App.js ~ line 163 ~ App ~ movies", movies)

    return <div>{loading ? <h1>Loading...</h1> :
        <div>{movies.map(movie =>
            <Movie key={movie.id} id={ movie.id } coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
        )}
        </div>}
    </div>
}

export default Home;