import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';
import CardSimmer from './CardSimmer';
import { Button } from 'react-bootstrap';

const TopRatedMovies = () => {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/top-rated-movies');
        const data = await json.json();
        setMovies(data.data.results)
        console.log(data.data.results);
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
        </div>
    )
}

export default TopRatedMovies
