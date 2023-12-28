import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { Button } from 'react-bootstrap';
import './Popular.css';

const Movie = () => {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    console.log(loading);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [page]);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/popular-moives/'+ page);
        const data = await json.json();
        setLoading(false);
        setMovies(data?.data?.results);
        if (!data.data?.results) {
            setLoading(true);
        }
    };

    function prevClick (e) {
        e.preventDefault();
        if (page > 1) {
            setPage(page - 1);
        };
    };
    function nextClick (e) {
        e.preventDefault();
        if (page < 1000) {
            setPage(page + 1);
        };
    };

    return (
        <div className='popular'>
            {
                loading ? <Loading /> :
                    <div className='movie-list'>
                        {
                            movies?.map((item) => {
                                return <Link to={'/movie-details/' + item.id} key={item.id} ><MovieCard movie={item} /></Link>
                            })
                        }
                    </div>
            }
            <div className='movie-page'>
                <Button onClick={(e) => prevClick(e)}> Prev </Button>
                Page {page} out of 1000 
                <Button onClick={(e) => nextClick(e)} > Next </Button>
            </div>
        </div>
    );
};

export default Movie;
