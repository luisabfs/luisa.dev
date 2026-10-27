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
              <Skill icon={<FaJs />} color={colors.yellowJs} text="JavaScript" />
              <Skill icon={<SiTypescript />} color={colors.blueTs} text="TypeScript" />
              <Skill icon={<FaReact />} color={colors.blueReact} text="React" />
              <Skill icon={<FaReact />} color={colors.blueReact} text="React Native" />
              <Skill icon={<FaReact />} color={colors.blueReact} text="Next.js" />
              <Skill icon={<FaReact />} color={colors.blueReact} text="Expo" />
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
            <b>Frontend &amp; Mobile Engineer</b>
            <div>
              <span>Flutter Brazil</span>
              <br />
              <p><span>julho/2024 - outubro/2026</span></p>
              <br />
              <ul>
                <li>Contribuí para lançamentos na App Store e Google Play e releases mobile contínuos, incluindo um app Android com mais de 5 milhões de downloads.</li>
                <li>Desenvolvi componentes reutilizáveis em React e TypeScript e interfaces transacionais, incluindo migrações de legado, integração com Design System, gerenciamento de estado e testes automatizados.</li>
                <li>Melhorei a interoperabilidade entre React Native e WebViews usando postMessage, polling de API, invalidação de cache RTK Query e persistência específica por plataforma.</li>
                <li>Integrei o SDK nativo de analytics Amplitude e implementei hooks de eventos; investiguei incidentes de produção e erros transacionais, além de apoiar releases com feature flags e monitoramento.</li>
                <li>Atualizei o Storybook para a versão 10 e validei mudanças na biblioteca de componentes com Chromatic.</li>
              </ul>
            </div>
          </CaptionWrapper>
          <br />
          <CaptionWrapper>
            <b>Frontend Developer</b>
            <div>
              <span>Mackenzie Presbyterian University</span>
              <br />
              <p><span>outubro/2023 - agosto/2024</span></p>
              <br />
              <ul>
                <li>Desenvolvi funcionalidades frontend para uma plataforma de educação digital com React, Next.js, TypeScript e Tailwind CSS.</li>
                <li>Criei e documentei componentes reutilizáveis no Storybook e implementei testes de componente e ponta a ponta com Cypress.</li>
                <li>Colaborei em integrações GraphQL, práticas de code review e melhorias na qualidade do frontend.</li>
              </ul>
            </div>
          </CaptionWrapper>
          <br />
          <CaptionWrapper>
            <b>Mobile Developer</b>
            <div>
              <span>Lojas Riachuelo</span>
              <br />
              <p><span>janeiro/2021 - janeiro/2023</span></p>
              <br />
              <ul>
                <li>Desenvolvi aplicações React Native e TypeScript para varejo omnichannel, incluindo ponto de venda mobile e autoatendimento.</li>
                <li>Trabalhei com fluxos offline-first, banco Realm, limitações de dispositivos Android e periféricos de loja, como impressoras e leitores.</li>
                <li>Mantive interfaces transacionais em diferentes tamanhos de tela e participei da substituição de sistemas legados de loja.</li>
              </ul>
            </div>
          </CaptionWrapper>
          <br />
          <CaptionWrapper>
            <b>Junior Mobile Developer</b>
            <div>
              <span>ma9</span>
              <br />
              <p><span>novembro/2019 - junho/2020</span></p>
              <br />
              <ul>
                <li>Desenvolvi interfaces React Native para um aplicativo fintech, colaborando com design em fluxos multiplataforma e experiências seguras.</li>
              </ul>
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
                <>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {link.title}
                  </a>
                  <br />
                </>
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

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/#about',
      permanent: true,
    },
  };
}
