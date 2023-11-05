import React from 'react';
import PersonalStatement from './PersonalStatement';
import Publications from './Publications';
import GitHubProjects from './GitHubProjects';
import '../styles/colors.css'; // This line should be at the top of your file
import '../styles/App.css'; // Assuming you have a CSS file for App-specific styles

function App() {

  // Placeholder data for PersonalStatement
  const personalStatement =  "I'm Logan Lang, currently a Ph.D. candidate in Physics at West Virginia University. My academic path began with a B.S. and progressed to an M.S. in Physics from the same institution. My research is in computational condensed matter physics, focusing on atomistic simulations to predict material properties. The emphasis of my thesis is on applying machine learning, specifically graph networks and databases, to material science. I aim to contribute to advancements in predictive models and data-driven discoveries in this field.This webpage is a gateway to my professional and academic endeavors. It features an array of projects that capture my interests and the breadth of my expertise, not limited to my specialization in machine learning and physics. Visitors can browse through my published research, gain insights into various computational techniques I've employed, and explore a diverse portfolio of projects that span across different facets of science and technology."
  const imageSrc= 'images/odie.png'


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
      title: 'MechElastic: A Python library for analysis of mechanical and elastic properties of bulk and 2D materials',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S0010465521001806',
      abstract: "This is the abstact title of the first publication",
      thumbnail: 'images/mechelastic.png',
    },
    // Add more publication objects with unique 'id' values here
  ];

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
