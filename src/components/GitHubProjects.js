import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GitHubProjects.css'; // Importing the CSS file

function GitHubProjects({ projects }) {
  return (
    <section>
      <div className="section-header">
        <h1>Projects</h1>
        <p className="section-description">
          Below you can find a selection of my GitHub projects. Click on any project to see more details on GitHub.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h2 className="project-title">{project.title}</h2>
              <img src={project.thumbnail} alt={project.title} />
            </a>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
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
