import React, { useMemo } from 'react';

import ProjectCard from '../../components/ProjectCard';

import layer from '../../assets/images/layer.png';
import project1 from '../../assets/images/todolist.png';
import project2 from '../../assets/images/barber.png';
import project3 from '../../assets/images/gituser.png';

import { Container, WrapCaption, WrapProjects } from './styles';

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
      <WrapCaption>
        <h1>meus projetinhos</h1>
        <img src={layer} alt="" />
      </WrapCaption>
      <WrapProjects>
        {projects.map((project) => (
          <ProjectCard
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
