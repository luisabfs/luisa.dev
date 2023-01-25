import React, { useMemo } from 'react';

import ProjectCard from '../components/ProjectCard';
import Title from '../components/Title';

import project1 from '../public/assets/images/projects/todolist.png';
import project2 from '../public/assets/images/projects/barber.png';
import project3 from '../public/assets/images/projects/gituser.png';

import { Container, WrapProjects } from '../styles/projects';

const Projects = () => {
  const projects = useMemo(() => [
    {
      link: 'https://github.com/luisabfs/todolist',
      title: 'To-do List',
      thumbnail: project1,
      description: 'POC da biblioteca Unform com ReactJS.',
    }, {
      link: 'https://github.com/luisabfs/gobarber',
      title: 'GoBarber',
      thumbnail: project2,
      description: 'Aplicação de uma barbearia ficcional com NodeJS.',
    }, {
      link: 'https://github.com/luisabfs/gituser',
      title: 'Git User',
      thumbnail: project3,
      description: 'Aplicação React Native com integração à API do Github.',
    },
  ], []);

  return (
    <Container>
      <Title>meus projetinhos</Title>
      <WrapProjects>
        {projects.map((project) => (
          <ProjectCard
            key={project.link}
            link={project.link}
            img={project.thumbnail}
            title={project.title}
            content={project.description}
          />
        ))}
      </WrapProjects>
    </Container>
  );
};

export default Projects;
