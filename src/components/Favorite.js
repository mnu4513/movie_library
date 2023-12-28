import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Favorite = () => {

    const [movies, setMovies] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const json = await fetch('https://brief-polished-radar.glitch.me/fav-movies', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId')
            }
        });
        const data = await json.json();

        if (data?.data.length < 1) {
            window.alert('You have not added any movie in your favorite list.');
            navigate('/home');
        }
        setMovies(data.data);
    };

    return (
        <div>
            {
                !movies ? <Loading /> :
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

export default Favorite;
