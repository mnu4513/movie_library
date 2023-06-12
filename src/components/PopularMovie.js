import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import CardSimmer from './CardSimmer';
import { Button } from 'react-bootstrap';

const Movie = () => {

    const [movies, setMovies] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [page]);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/popular-moives/'+ page);
        const data = await json.json();
        setMovies(data.data.results)
    };

    function prevClick (e) {76
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
                !movies ? <CardSimmer /> :
                    <div>
                        {
                            movies?.map((item) => {
                                return <Link to={'/movie-details/' + item.id} key={item.id} ><MovieCard movie={item} /></Link>
                            })
                        }
                    </div>
            }
            <div className='page'>
                <Button onClick={(e) => prevClick(e)}> Prev </Button>
                You are on page no. {page} out of 1000 
                <Button onClick={(e) => nextClick(e)} > Next </Button>
            </div>
        </div>
    )
}

export default Movie
