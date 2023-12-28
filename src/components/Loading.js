import './Loading.css'
import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
        This may take a few seconds to load page for the first time.
      <div className="loader">
        
      </div>
    </div>
  );
};

export default Loading;