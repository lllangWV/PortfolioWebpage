import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PersonalStatement.css'; // Make sure to create this CSS file

function PersonalStatement({ statement, imageSrc }) {
  return (
    <section className="personal-statement">
      <div className="personal-image-container">
        <img src={imageSrc} alt="Portrait" className="personal-image" />
      </div>
      <div className="personal-text-container">
        <h1 className="personal-title">About Me</h1>
        <p className="personal-description">{statement}</p>
      </div>
    </section>
  );
}

PersonalStatement.propTypes = {
  statement: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired, // Add this prop to include the image source
};

export default PersonalStatement;
