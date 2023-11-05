import React from 'react';
import PropTypes from 'prop-types';

function GitHubProjects({ projects }) {
  return (
    <section>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.thumbnail} alt={project.title} />
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

GitHubProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GitHubProjects;
