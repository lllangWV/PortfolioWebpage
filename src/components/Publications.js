import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Publications.css'; // Ensure you have this CSS file in the same directory

function Publications({ publications }) {
  return (
    <section className="publications-section">
      <h1 className="section-header">My Publications</h1>
      <p className="section-description">
        Here are some of my research papers. Hover over a publication to read the abstract.
      </p>
      <div className="publications-grid">
        {publications.map((publication) => (
          <div key={publication.id} className="publication-card">
            <div className="publication-header">
              <a href={publication.url} target="_blank" rel="noopener noreferrer" className="publication-link">
                <h3 className="publication-title">{publication.title}</h3>
              </a>
            </div>
            <img src={publication.thumbnail} alt={publication.title} className="publication-thumbnail" />
            {publication.abstract && <p className="publication-abstract">{publication.abstract}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      abstract: PropTypes.string,
      thumbnail: PropTypes.string, // Add thumbnail property
    })
  ).isRequired,
};

export default Publications;
