

export const personalStatement = `
  I'm Logan Lang, currently a Ph.D. candidate in Physics at West Virginia University. 
  My academic path began with a B.S. and progressed to an M.S. in Physics from the same institution. 
  My research is in computational condensed matter physics, focusing on atomistic simulations 
  to predict material properties. The emphasis of my thesis is on applying machine learning, 
  specifically graph networks and databases, to material science. I aim to contribute to 
  advancements in predictive models and data-driven discoveries in this field.
  
  This webpage is a gateway to my professional and academic endeavors. It features an array of 
  projects that capture my interests and the breadth of my expertise, not limited to my 
  specialization in machine learning and physics. Visitors can browse through my published research, 
  gain insights into various computational techniques I've employed, and explore a diverse portfolio 
  of projects that span across different facets of science and technology.
`;
export const imageSrc = 'images/odie.png';


export const placeholderProjects = [
  {
    id: 'project-1',
    title: 'PyProcar',
    url: 'https://github.com/romerogroup/pyprocar',
    thumbnail: 'images/pyprocar.png',
    description: `
    PyProcar is a robust, open-source Python library used for pre- 
    and post-processing of the electronic structure data coming from DFT calculations. 
    PyProcar provides a set of functions that manage data obtained from the PROCAR format. 
    Basically, the PROCAR format is a projection of the Kohn-Sham states over atomic orbitals. 
    That projection is performed to every k-point in the considered mesh, every energy band and every atom. 
    PyProcar is capable of performing a multitude of tasks including plotting plain 
    and spin/atom/orbital projected band structures and Fermi surfaces- both in 2D and 3D, 
    Fermi velocity plots, unfolding bands of a super cell, comparing band structures from multiple 
    DFT calculations, plotting partial density of states and generating a k-path for a given crystal structure.`,
  },
  {
    id: 'project-2',
    title: 'MechElastic',
    url: 'https://github.com/romerogroup/MechElastic',
    thumbnail: 'images/mechelastic_github.png',
    description: `
    This Python library can be used to calculate some important physical properties 
    such as elastic moduli, melting temperature, Debye temperature, elastic wave velocities, 
    elastic anisotropy, etc. for all crystalline systems using output data from an 
    elastic tensor calculation. It can also be used to test 
    the mechanical stability of any bulk system. MechElastic reads the elastic matrix 
    written in the output files from DFT codes. Additionally, MechElastic allows 
    performing Equation of State (EOS) analysis provided inputs of Volume and Energy or Volume and Pressure.`,
  },
  {
  id: 'project-3',
    title: 'PortfolioWebpage',
    url: 'https://github.com/lllangWV/PortfolioWebpage',
    thumbnail: 'images/portfolio_webpage.png',
    description: `This repostory is used to create a Portfolio Website`,
  },
  {
    id: 'project-4',
      title: 'ChatGptCoding',
      url: 'https://github.com/lllangWV/ChatGptCoding',
      thumbnail: 'images/chatgpt_coding.png',
      description: `This repository serves as a companion to our live webinar event, 
      where we explore the capabilities of AI in coding with a focus on the ChatGPT model from OpenAI.`,
    },
    {
    id: 'project-5',
      title: 'ForensicFit',
      url: 'https://github.com/romerogroup/ForensicFit',
      thumbnail: 'images/forensicfit.png',
      description: `ForensicFit is created to preprocess scanned images from different tears 
      and generate a database that will be used in different machine-learning approaches.`,
    },
    {
    id: 'project-6',
    title: 'Graph_Network_Project',
    url: 'https://github.com/lllangWV/Graph_Network_Project',
    thumbnail: 'images/graph_network_project.png',
    description: `This repository is for exploring Graph Networks and Database in Material Science.`,
    },
  // ... more projects
];

export const placeholderPublications = [
  {
    id: 'publication-1',
    title: 'MechElastic: A Python library for analysis ...',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0010465521001806',
    abstract: `
    The MechElastic Python package evaluates the mechanical and elastic properties of bulk and 2D materials
    using the elastic coefficient matrix (C_{ij}) obtained from any ab-initio density-functional theory (DFT) code.`,
    thumbnail: 'images/mechelastic.png',
  },
  {
    id: 'publication-2',
    title: 'Assessing Nickel Titanium Binary Systems Using Structural Search Methods and Ab Initio Calculations',
    url: 'https://pubs.acs.org/doi/full/10.1021/acs.jpcc.0c10453',
    abstract: `
    Nickel titanium, also know as nitinol, is a prototypical shape memory alloy, a property intimately linked 
    to a phase transition in the microstructure, which allows the meso/macroscopic sample shape to be 
    recovered after thermal cycling. `,
    thumbnail: 'images/niti.png',
  },
  
  // ... more publications
];