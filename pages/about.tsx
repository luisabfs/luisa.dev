import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { DiGit } from 'react-icons/di';
import { BsBriefcase } from 'react-icons/bs';
import { SiTypescript } from 'react-icons/si';
import {
  FaJs, FaNodeJs, FaReact,
} from 'react-icons/fa';
import {
  FiAtSign, FiStar, FiCoffee,
} from 'react-icons/fi';

import Navbar from '../components/Navbar';
import AboutCard from '../components/AboutCard';
import Profile from '../components/Profile';
import Skill from '../components/Skill';

import {
  Container,
  Wrapper,
  Main,
  Sidebar,
  SkillWrapper,
  CaptionWrapper,
} from '../styles/about';
import { ScrollToTopOnMount } from '../components/ScrollToTop';

function About() {
  const { colors } = useTheme();

  const studyLinks = useMemo(() => [
    {
      url: 'https://rocketseat.com.br/bootcamp',
      title: 'Bootcamp GoStack 6.0 | Rocketseat',
    },
    {
      url: 'https://www.udemy.com/course/git-e-github-na-vida-real',
      title: 'Git e Github na Vida Real | Willian Justen',
    },
    {
      url: 'https://www.udemy.com/course/git-e-github-para-iniciantes/',
      title: 'Git e Github para Iniciantes | Willian Justen',
    },
    {
      url: 'https://www.udemy.com/course/ultimate-web/',
      title: 'Beginner Full Stack Web Development | Devslopes',
    },
    {
      url: 'https://www.udemy.com/course/curso-completo-do-desenvolvedor-android/',
      title: 'Curso Completo de Desenvolvimento Android | Jamilton Damasceno',
    },
    {
      url: 'https://www.udemy.com/course/curso-kotlin-android/',
      title: 'Curso Completo de Kotlin para Desenvolvimento Android | AndroidPro Blog',
    },
  ], []);

  const interestsLinks = useMemo(() => [
    {
      url: 'https://www.skoob.com.br/usuario/1123866-lully',
      title: 'Livros - Skoob',
    },
    {
      url: 'https://filmow.com/usuario/lul_ly',
      title: 'Filmes/Séries - Filmow',
    },
    {
      url: 'https://duolingo.com/profile/luisabfs',
      title: 'Aprendizado de Idiomas - Duolingo',
    },
  ], []);

  const infos = useMemo(() => [
    {
      title: 'skills',
      icon: <FiAtSign />,
      content: (
        <>
          <CaptionWrapper>
            <SkillWrapper>
              <Skill icon={<FaJs />} color={colors.yellowJs} text="Javascript" />
              <Skill icon={<SiTypescript />} color={colors.blueTs} text="Typescript" />
              <Skill icon={<FaReact />} color={colors.blueReact} text="React" />
              <Skill icon={<FaNodeJs />} color={colors.greenNode} text="Node.js" />
              <Skill icon={<DiGit />} color={colors.redGit} text="Git" />
            </SkillWrapper>
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
            <div>
              Lojas Riachuelo S/A
              <span>janeiro/2021 - janeiro/2023</span>
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
            </div>
          </CaptionWrapper>
          <br />
          <CaptionWrapper>
            <b>Desenvolvedora Mobile</b>
            <div>
              ma9 Soluções Inteligentes
              <span>novembro/2019 - junho/2020</span>
              <span>
                <li>Atuei no desenvolvimento de um aplicativo mobile fintech em React Native</li>
                <li>Implementei UIs <i>cross-platform</i>, feitas pela equipe de design responsável</li>
                <li>Trabalhei, como parte do time de desenvolvimento, com a metologia ágil Scrum</li>
                <li>Colaborei na manutenção de um repositório no Github</li>
                <li>Stack: Javascript, React, React Native, AsyncStorage, React Context API</li>
              </span>
            </div>
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
            <div>
              {studyLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
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
            Meus hobbies favoritos são: ler, cantar, ouvir música, assistir filmes/séries e aprender novas línguas.
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
      )
    }
  ], [colors.blueReact, colors.blueTs, colors.greenNode, colors.redGit, colors.yellowJs]);

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
