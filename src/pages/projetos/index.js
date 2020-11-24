import React, { Component } from 'react';

import {
  Container, Blurb, Wrapper, WrapCaption, WrapProjects,
} from './styles';

// import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

import project1 from '../../assets/images/todolist.png';
import project2 from '../../assets/images/barber.png';
import project3 from '../../assets/images/gituser.png';
import layer from '../../assets/images/layer.png';

export default class About extends Component {
  render() {
    return (
      <Container>
        {/* <Navbar /> */}
        <Blurb>
          <Wrapper>
            <WrapCaption>
              <h1>meus projetinhos</h1>
              <img src={layer} alt="" />
            </WrapCaption>
            <WrapProjects>
              <ProjectCard
                link="https://github.com/luisabfs/todolist"
                img={project1}
                title="To-do List"
                content="POC da biblioteca Unform com ReactJS."
              />
              <ProjectCard
                link="https://github.com/luisabfs/gobarber"
                img={project2}
                title="GoBarber"
                content="Aplicação de uma barbearia ficcional com NodeJS."
              />
              <ProjectCard
                link="https://github.com/luisabfs/gituser"
                img={project3}
                title="Git User"
                content="Aplicação React Native com integração à API do Github."
              />
            </WrapProjects>
          </Wrapper>
        </Blurb>

      </Container>
    );
  }
}
