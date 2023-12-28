import React from 'react'
import { Button } from 'react-bootstrap';

const movieCard = (props) => {
  const { original_language, original_title, popularity, poster_path } = props.movie;
  return (
    <div className='movie-card'>
      <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + poster_path} alt="poster image" />
      <div className='info'>
         { original_title !== original_title?.toLowerCase() ?
        <p> {original_title?.slice(0, 40)}</p> :  <p> {original_title?.slice(0, 12)}</p> }
        <p> Language : {original_language?.slice(0, 15)} </p>
        <p>Popularity : {popularity} </p>
      </div>

      <div>

        <Button variant='outline-primary'>Show details</Button>
      </div>
    </div>
  );
};

export default movieCard
