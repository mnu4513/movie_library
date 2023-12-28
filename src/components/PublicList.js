import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const PublicList = () => {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/public-list', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId')
            }
        });
        const data = await json.json();
        console.log(data);
        setMovies(data.data);
        setLoading(false);
    };

    return (
        <div className='movies-list'>
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
        </div>
    );
};

export default PublicList;
