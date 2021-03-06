/* eslint-disable max-len */
import React, { useMemo } from 'react';

import { DiGit } from 'react-icons/di';
import { BsBriefcase } from 'react-icons/bs';
import { SiTypescript } from 'react-icons/si';
import {
  FaJs, FaNodeJs, FaReact, FaCode,
} from 'react-icons/fa';
import {
  FiTerminal, FiAtSign, FiStar, FiCoffee,
} from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import AboutCard from '../../components/AboutCard';
import Profile from '../../components/Profile';
import Skill from '../../components/Skill';

import {
  Container,
  Wrapper,
  Main,
  Sidebar,
  SkillWrapper,
  CaptionWrapper,
} from './styles';
import { ScrollToTopOnMount } from '../../components/ScrollToTop';

import funfacts from '../../assets/images/funfacts/funfacts.png';
import { interestsLinks, studyLinks } from './data';

function About() {
  const infos = useMemo(() => [
    {
      title: 'introdução',
      icon: <FiTerminal />,
      content: 'Eu tinha 11 anos quando entrei em contato pela primeira vez com algoritmos. Desde então sou fascinada pela área de tecnologia, especialmente pela programação. Agora, aos 19, após 3 anos de curso técnico e diversas horas de estudos por conta própria, estou determinada a construir uma carreira como desenvolvedora de software.',
    },
    {
      title: 'skills',
      icon: <FiAtSign />,
      content: (
        <>
          <CaptionWrapper>
            <h3>principais</h3>
            <SkillWrapper>
              <Skill icon={<FaJs />} color="#f0db4f" text="Javascript" />
              <Skill icon={<SiTypescript />} color="#007acc" text="Typescript" />
              <Skill icon={<FaReact />} color="#61dbfb" text="React" />
              <Skill icon={<FaNodeJs />} color="#3c873a" text="Node.js" />
              <Skill icon={<DiGit />} color="#f1502f" text="Git" />
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
      ),
    },
    {
      title: 'experiência',
      icon: <BsBriefcase />,
      content: (
        <>
          <CaptionWrapper>
            <b>Desenvolvedora Fullstack</b>
            <p>
              Lojas Riachuelo S/A
              <span>janeiro/2021 - atualmente</span>
              <span>
                <li>Atuação em uma das maiores varejistas do Brasil</li>
                <li>Implementação de um PDV Mobile, almejando melhorias na experiência do cliente em lojas físicas, no contexto de vendas e pagamentos</li>
                <li>Substituição de sistemas legados, visando integração <i>omnichannel</i></li>
                <li>UIs e arquiteturas de acordo com princípios <i>offline-first</i></li>
                <li>Squad composta por 10+ desenvolvedores, PM/POs, QAs e UXs</li>
                <li>Metodologia ágil Kanban, Jira e cerimônias (dailies, plannings e retrospectivas)</li>
                <li>Manutenção de repositórios no Microsoft Azure, seguindo o pipeline CI/CD</li>
                <li>Stack: Java/Spring Boot, Typescript, NodeJS, React, React Native, RealmDB</li>
              </span>
            </p>
          </CaptionWrapper>
          <br />
          <CaptionWrapper>
            <b>Desenvolvedora Mobile</b>
            <p>
              ma9 Soluções Inteligentes
              <span>novembro/2019 - junho/2020</span>
              <span>
                <li>Atuei no desenvolvimento de um aplicativo mobile fintech em React Native</li>
                <li>Implementei UIs <i>cross-platform</i>, feitas pela equipe de design responsável</li>
                <li>Trabalhei, como parte do time de desenvolvimento, com a metologia ágil Scrum</li>
                <li>Colaborei na manutenção de um repositório no Github</li>
              </span>
            </p>

          </CaptionWrapper>
        </>
      ),
    },
    {
      title: 'estudos',
      icon: <FiStar />,
      content: (
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
              {studyLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </p>
          </CaptionWrapper>
        </>
      ),
    },
    {
      title: 'interesses',
      icon: <FiCoffee />,
      content: (
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

          {interestsLinks.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </>

      ),
    },
    {
      title: 'diversos',
      icon: <FaCode />,
      content: (
        <a
          href="https://sourcerer.io/luisabfs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={funfacts} alt="" />
        </a>
      ),
    },
  ], []);

  return (
    <Container>
      <ScrollToTopOnMount />
      <Navbar />
      <Wrapper>
        <Sidebar>
          <Profile />
        </Sidebar>
        <Main>
          {infos.map((info) => (
            <AboutCard
              icon={info.icon}
              title={info.title}
              content={info.content}
            />
          ))}
        </Main>
      </Wrapper>
    </Container>
  );
}

export default About;
