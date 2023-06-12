import React from 'react'

const Footer = () => {
  return (
    <div className='footer' >
      <hr></hr>
      <h3>Frequently asked questions: </h3>
      <hr></hr>

      <details>
        <summary>About this project?</summary>
        Go to the GitHub and see ReadME file: 
           <a href='https://github.com/mnu4513/movie_library' target="_blank" > Click here </a> to go to the GitHub source code or use this link: https://github.com/mnu4513/movie_library
      </details>
      <hr></hr>
      <details>
        <summary>Where is source code?</summary>
        Go to the GitHub to get the source code: 
           <a href='https://github.com/mnu4513/movie_library' target="_blank" > Click here </a> to go to the GitHub source code or use this link: https://github.com/mnu4513/movie_library
      </details>
      <hr></hr>
    </div>
  );
};

export default Footer;