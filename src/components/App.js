import React from 'react';
import PersonalStatement from './PersonalStatement';
import Publications from './Publications';
import GitHubProjects from './GitHubProjects';

function App() {

  // Placeholder data for PersonalStatement
  const personalStatement = "I'm a passionate software developer with expertise in React and Node.js... (your personal statement here)";


  const placeholderProjects = [
    {
      id: 'project-1',
      title: 'PyProcar',
      url: 'https://github.com/romerogroup/pyprocar',
      thumbnail: 'images/pyprocar.png',
      description: 'PyProcar is a robust, open-source Python library used for pre- and post-processing of the electronic structure data coming from DFT calculations. ',
    },
    // Add more project objects with unique 'id' values here
  ];

  const placeholderPublications = [
    {
      id: 'publication-1',
      title: 'Title of First Publication',
      url: 'http://example.com/your-publication',
    },
    // Add more publication objects with unique 'id' values here
  ];

  return (
    <div>
      <PersonalStatement statement={personalStatement} />
      <Publications publications={placeholderPublications}  />
      <GitHubProjects projects={placeholderProjects} />
    </div>
  );
}

export default App;
