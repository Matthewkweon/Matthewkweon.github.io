import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import projectsData from './projectData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h2>
        <ProjectCarousel projects={projectsData} />
      </div>
    </section>
  );
};

export default ProjectsSection;