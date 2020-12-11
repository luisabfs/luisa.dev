import React, { Component } from 'react';
import { IconContext } from 'react-icons';

import { BsBriefcase } from 'react-icons/bs';
import {
  FiTerminal, FiAtSign, FiStar, FiCoffee,
} from 'react-icons/fi';
import {
  FaJs, FaNodeJs, FaReact, FaCode,
} from 'react-icons/fa';

import { DiGit } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import {
  Container,
  Wrapper,
  Main,
  Sticky,
  Sidebar,
  SkillWrapper,
  Skill,
  CaptionWrapper,
} from './styles';

import Navbar from '../../components/Navbar';
import AboutCard from '../../components/AboutCard';
import Profile from '../../components/Profile';
import { ScrollToTopOnMount } from '../../components/ScrollToTop';

import funfacts from '../../assets/images/funfacts.png';

export default class About extends Component {
  render() {
    return (
      <Container>
        <ScrollToTopOnMount />
        <Navbar />
        <Wrapper>
          <Sidebar>
            <Sticky>
              <Profile />
            </Sticky>
          </Sidebar>
          <Main>
            <AboutCard
              icon={<FiTerminal />}
              title="introdução"
              content="Eu tinha 11 anos quando entrei em contato pela primeira vez
              com algoritmos. Desde então sou fascinada pela área de tecnologia,
              especialmente pela programação. Agora, aos 19, após 3 anos de curso
              técnico e diversas horas de estudos por conta própria, estou determinada
              a construir uma carreira como desenvolvedora de software."
            />
            <AboutCard
              icon={<FiAtSign />}
              title="skills"
              content={(
                <>
                  <CaptionWrapper>
                    <h3>principais</h3>
                    <SkillWrapper>
                      <Skill>
                        <IconContext.Provider
                          value={{ size: '64px', color: '#f0db4f' }}
                        >
                          <FaJs />
                        </IconContext.Provider>
                        <span>Javascript</span>
                      </Skill>
                      <Skill>
                        <IconContext.Provider
                          value={{ size: '64px', color: '#007acc' }}
                        >
                          <SiTypescript />
                        </IconContext.Provider>
                        <span>Typescript</span>
                      </Skill>
                      <Skill>
                        <IconContext.Provider
                          value={{ size: '64px', color: '#61dbfb' }}
                        >
                          <FaReact />
                        </IconContext.Provider>
                        <span>React</span>
                      </Skill>
                      <Skill>
                        <IconContext.Provider
                          value={{ size: '64px', color: '#3c873a' }}
                        >
                          <FaNodeJs />
                        </IconContext.Provider>
                        <span>Node.js</span>
                      </Skill>
                      <Skill>
                        <IconContext.Provider
                          value={{ size: '64px', color: '#f1502f' }}
                        >
                          <DiGit />
                        </IconContext.Provider>
                        <span>Git</span>
                      </Skill>
                    </SkillWrapper>
                  </CaptionWrapper>
                  <CaptionWrapper>
                    <h3>outros</h3>
                    <p>
                      #html5 #css3 #restAPIs #axios #express.js
                      #redux #redux-saga #postgres #mongodb #docker #eslint
                      #styled-components
                    </p>
                  </CaptionWrapper>
                </>
              )}
            />
            <AboutCard
              icon={<FiCoffee />}
              title="interesses"
              content={(
                <>
                  <p>
                    Sou apaixonada pelo conhecimento e a programação é apenas uma das formas de
                    exercitar a minha criatividade e pôr as minhas ideias em prática.
                  </p>
                  <br />
                  <p>
                    Meus hobbies favoritos são: ler, cantar, ouvir música, assistir filmes, jogar LOL e aprender novas línguas.
                    Também gosto de passar o tempo com a minha família (incluindo meus 2 gatos haha)
                    e adoro tomar um café - sem açúcar, por favor!
                  </p>

                  <br />
                  Porém, acima de tudo, o que eu mais AMO fazer é organizar todas essas coisas! Então, caso alguém queira acompanhar o que eu venho fazendo, aqui estão algumas redes sociais que utilizo:
                  <br />
                  <br />

                  <a
                    href="https://www.skoob.com.br/usuario/1123866-lully"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livros - Skoob
                  </a>

                  <a
                    href="https://filmow.com/usuario/lul_ly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Filmes/Séries - Filmow
                  </a>

                  <a
                    href="https://duome.eu/lul_ly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aprendizado de Línguas - Duolingo
                  </a>
                </>

              )}
            />
            <AboutCard
              icon={<BsBriefcase />}
              title="experiência"
              content={(
                <>
                  <CaptionWrapper>
                    <b>Desenvolvedora Mobile</b>
                    <p>
                      ma9 Soluções Inteligentes
                      <span>novembro/2019 - junho/2020</span>
                      <br />
                      <span>
                        <li> Atuei no desenvolvimento de um aplicativo mobile fintech em React Native</li>
                        <li> Implementei UIs <i>cross-platform</i>, feitas pela equipe de design responsável</li>
                        <li> Trabalhei, como parte do time de desenvolvimento, com a metologia ágil Scrum</li>
                        <li> Colaborei na manutenção de um repositório no Github</li>
                      </span>
                    </p>

                  </CaptionWrapper>
                </>
              )}
            />
            <AboutCard
              icon={<FiStar />}
              title="estudos"
              content={(
                <>
                  <CaptionWrapper>
                    <h3>acadêmico</h3>
                    <p>
                      Técnico, Informática | Instituto Federal de Sergipe - IFS
                      <span>junho/2015 - agosto/2018</span>
                    </p>
                  </CaptionWrapper>
                  <CaptionWrapper>
                    <h3>cursos</h3>
                    <p>
                      <a
                        href="https://rocketseat.com.br/bootcamp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bootcamp GoStack 6.0 | Rocketseat
                      </a>
                      <a
                        href="https://www.udemy.com/course/git-e-github-na-vida-real"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Git e Github na Vida Real | Willian Justen
                      </a>
                      <a
                        href="https://www.udemy.com/course/git-e-github-para-iniciantes/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Git e Github para Iniciantes | Willian Justen
                      </a>
                      <a
                        href="https://www.udemy.com/course/ultimate-web/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Beginner Full Stack Web Development | Devslopes
                      </a>
                      <a
                        href="https://www.udemy.com/course/curso-completo-do-desenvolvedor-android/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Curso Completo de Desenvolvimento Android | Jamilton
                        Damasceno
                      </a>
                      <a
                        href="https://www.udemy.com/course/curso-kotlin-android/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Curso Completo de Kotlin para Desenvolvimento Android |
                        AndroidPro Blog
                      </a>
                    </p>
                  </CaptionWrapper>
                </>
              )}
            />
            <AboutCard
              icon={<FaCode />}
              title="diversos"
              content={(
                <a
                  href="https://sourcerer.io/luisabfs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={funfacts} alt="" />
                </a>
              )}
            />
          </Main>
        </Wrapper>
      </Container>
    );
  }
}
