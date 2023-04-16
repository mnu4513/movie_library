import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import CardSimmer from './CardSimmer';
import DetailsSimmer from './DetailsSimmer';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [similars, setSimilars] = useState(null);

  const [details, setDetails] = useState({});
  const [dataLoded, setDataLoded] = useState(false);

  // const [details, setDetails] = useState({
  //   "adult": false,
  //   "backdrop_path": "/u7i1XtbOubq0xwRy2Zbgmox6g9W.jpg",
  //   "belongs_to_collection": null,
  //   "budget": 0,
  //   "genres": [
  //     {
  //       "id": 18,
  //       "name": "Drama"
  //     },
  //     {
  //       "id": 10749,
  //       "name": "Romance"
  //     }
  //   ],
  //   "homepage": "",
  //   "id": 220,
  //   "imdb_id": "tt0048028",
  //   "original_language": "en",
  //   "original_title": "East of Eden",
  //   "overview": "In the Salinas Valley in and around World War I, Cal Trask feels he must compete against overwhelming odds with his brother for the love of their father. Cal is frustrated at every turn, from his reaction to the war, how to get ahead in business and in life, and how to relate to his estranged mother.",
  //   "popularity": 13.301,
  //   "poster_path": "/xv1MZVIop0SQqwLUymgE5eb2LFl.jpg",
  //   "production_companies": [
  //     {
  //       "id": 174,
  //       "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
  //       "name": "Warner Bros. Pictures",
  //       "origin_country": "US"
  //     }
  //   ],
  //   "production_countries": [
  //     {
  //       "iso_3166_1": "US",
  //       "name": "United States of America"
  //     }
  //   ],
  //   "release_date": "1955-04-10",
  //   "revenue": 0,
  //   "runtime": 115,
  //   "spoken_languages": [
  //     {
  //       "english_name": "English",
  //       "iso_639_1": "en",
  //       "name": "English"
  //     }
  //   ],
  //   "status": "Released",
  //   "tagline": "The searing classic of paradise lost!",
  //   "title": "East of Eden",
  //   "video": false,
  //   "vote_average": 7.578,
  //   "vote_count": 622
  // });



  useEffect(() => {
    getData();
    setDataLoded(true);
  }, [movieId]);

  async function getData() {
    const data = await fetch('https://brief-polished-radar.glitch.me/movie-details/' + movieId);
    const json = await data.json();
    setDetails(json.data);
    setSimilars(json.similar.results);
    // setSimilars(json.data.similars);
  };
  // console.log(similars);

  const { adult, backdrop_path, belongs_to_collection, budget, genres, homepage, id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count } = details;

  // add to favorite list :- 
  async function addToFav(e) {
    e.preventDefault();
    const data = await fetch('https://brief-polished-radar.glitch.me/add-to-fav/' + movieId, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      },
      body: JSON.stringify(details)
    });
    const json = await data.json();
    if (!json.status) {
      window.alert(json.message);
    } else {
      window.alert(json.message);

    }
  };

// remove from favorite list :- 
  async function removeFav(e) {
    e.preventDefault();
    const data = await fetch('https://brief-polished-radar.glitch.me/remove-fav/' + movieId, {
      method: 'delete',
      headers: {
        'Contet-Type': 'application/json',
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      }
    });
    const json = await data.json();
    if (!json.status) {
      window.alert(json.message);
    } else {
      window.alert(json.message);
    }
  };

  // add to public list :- 
  async function addToPublic(e) {
    e.preventDefault();
    const data = await fetch('https://brief-polished-radar.glitch.me/add-to-public/' + movieId, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      },
      body: JSON.stringify(details)
    });
    const json = await data.json();
    if (!json.status) {
      window.alert(json.message);
    } else {
      window.alert(json.message);

    }
  };

  // remove from public list :- 
  async function removePublic(e) {
    e.preventDefault();
    const data = await fetch('https://brief-polished-radar.glitch.me/remove-public/' + movieId, {
      method: 'delete',
      headers: {
        'Contet-Type': 'application/json',
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      }
    });
    const json = await data.json();
    if (!json.status) {
      window.alert(json.message);
    } else {
      window.alert(json.message);
    }
  };

  return (
    <>
      {
        !dataLoded ? <DetailsSimmer /> : <div className='details-main'>
          <div className='detials-poster'>
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`} alt='poster' />
            <div className='details-heading'>
              <h3> {original_title} ({release_date?.slice(0, 4)}) </h3>
              <h6> {tagline} </h6>
              <h5> Released on : {release_date} </h5>
              <h5> Status : {status} </h5>
              <h5> Genres : {genres?.map((item) => {
                return ` ${item.name} `
              })}  </h5>
              <h5> Duration: {runtime} minutes </h5>
              <h5>Original language: {original_language} </h5>
              <h5>Spoken language: {spoken_languages?.map((item) => {
                return `${item.name} `
              })} </h5>
              <h5> Vote average: {parseInt(vote_average * 10)} </h5>
              <h5>  Total vote: {vote_count} </h5>
              <span>Overview:  </span> <span>{overview?.slice(0, 480)}</span>
              <br /> <br />
              <br /> <br />
              <button className='fav-btn' onClick={(e) => addToFav(e)} style={{ marginRight: "20px" }}>Add to Favorite</button>
              <button className='fav-btn' onClick={(e) => removeFav(e)} >Remove from Favorite</button>
              <button className='fav-btn' onClick={(e) => addToPublic(e)} style={{ marginRight: "20px" }}>Add to Public</button>
              <button className='fav-btn' onClick={(e) => removePublic(e)} >Remove from Public</button>
            </div>

          </div>
          <div className='similars'>
            <h2> Similar movies to - "{title}"</h2>
            {
              !similars ? <CardSimmer /> :
                <div>
                  {
                    similars?.map((item) => {
                      return <Link to={'/movie-details/' + item.id} key={item.id} ><MovieCard movie={item} /></Link>
                    })
                  }
                </div>
            }
          </div>
        </div>
      }
    </>
  );
};

export default MovieDetails
