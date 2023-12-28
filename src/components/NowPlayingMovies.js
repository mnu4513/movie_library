import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { Button } from 'react-bootstrap';

const NowPlayingMovies = () => {
    
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/now-playing-movies');
        const data = await json.json();
        setMovies(data?.data?.results)
    };

    return (
        <div className='popular'>
            {
                !movies ? <Loading /> :
                    <div className='movie-list'>
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

export default NowPlayingMovies;
