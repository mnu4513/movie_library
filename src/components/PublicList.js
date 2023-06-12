import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import CardSimmer from './CardSimmer';

const PublicList = () => {

    const [movies, setMovies] = useState(null);

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
    };

    return (
        <div>
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
    );
};

export default PublicList;
