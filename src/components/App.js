import React from 'react';
import { personalStatement, imageSrc, placeholderProjects, placeholderPublications } from './data';
import PersonalStatement from './PersonalStatement';
import Publications from './Publications';
import GitHubProjects from './GitHubProjects';
import '../styles/colors.css'; // This line should be at the top of your file
import '../styles/App.css'; // Assuming you have a CSS file for App-specific styles

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Logan Lang</h1>
      </header>
      <PersonalStatement statement={personalStatement} imageSrc={imageSrc} />
      <Publications publications={placeholderPublications}  />
      <GitHubProjects projects={placeholderProjects} />
    </div>
  );
}

export default App;
