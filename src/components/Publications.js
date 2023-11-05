import React from 'react';
import PropTypes from 'prop-types';

function Publications({ publications }) {
  return (
    <section>
      <h1>My Publications</h1>
      <ul>
        {publications.map((publication) => (
          <li key={publication.id}>
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              {publication.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Publications;
