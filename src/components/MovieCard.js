import React from 'react'

const movieCard = (props) => {
  const {original_language, original_title, popularity, poster_path} = props.movie;
  return (
    <div className='movieCard'>
      <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + poster_path} alt="poster image" />
      <h3>  {original_title?.slice(0, 12)} </h3>
      <h5> Language : {original_language?.slice(0, 15)} </h5>
      <p>Popularity : {popularity} </p>
     
      <div>
     
        <button >Show detils</button>
        </div>
    </div>
  );
};

export default movieCard
