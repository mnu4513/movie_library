import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <footer className="footer">

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



      <div className="footer-content">
        <div className="contact">
          <br /> <br />
          <h3>Contact</h3>
          <p>jaybhagwan1@proton.me</p>
          <p>Phone: +91-7073979424</p>
        </div>
        <div className="social-media">
          <br /> <br />
          <h3>Connect with Me</h3>
          <a href="https://www.linkedin.com/in/jay-bhagwan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/mnu4513" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Jay Bhagwan. All Rights Reserved.</p>
      </div>


    </footer>

  );
};

export default Footer;