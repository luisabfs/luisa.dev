import React from 'react';
import Image from 'next/image';

import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  Container,
  Eyebrow,
  Intro,
  Layout,
  ProjectImageFrame,
  Section,
} from './styles';

const projects = [
  {
    name: 'Guia Ítala Sergipe',
    url: 'https://www.guiaitalasergipe.com.br/',
    description: 'A tourism website where visitors can explore local destinations, build a personalized itinerary, and share their selected tours directly through WhatsApp.',
    highlights: ['Interactive itinerary builder', 'Selection state', 'Responsive UI', 'Animations', 'WhatsApp integration'],
    screenshot: '/assets/images/projects/guia-itala-sergipe.png',
    featured: true,
  },
  {
    name: 'Cristiane Alcântara',
    url: 'https://nutri-cristiane-alcantara-luisabfs-projects.vercel.app/',
    description: 'A responsive website for a nutritionist, designed to communicate her approach, introduce her services, and make appointment inquiries easy.',
    highlights: ['UX', 'Information architecture', 'Responsive design', 'Clear calls to action'],
    screenshot: '/assets/images/projects/cristiane-alcantara.png',
    featured: false,
  },
];

export default function SelectedWork() {
  return (
    <Section id="projects" aria-labelledby="selected-work-title">
      <Container>
        <Eyebrow>01 / Selected Work</Eyebrow>
        <h2 id="selected-work-title">Selected work</h2>
        <Intro>Client projects shaped through product thinking, user experience, and thoughtful implementation.</Intro>

        <Layout>
          {projects.map((project) => (
            <Card key={project.name} $featured={project.featured}>
              {project.featured && <span className="featured-badge">Featured</span>}
              <ProjectImageFrame>
                <Image
                  src={project.screenshot}
                  alt={`${project.name} website screenshot`}
                  fill
                  sizes="(max-width: 820px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
              </ProjectImageFrame>
              <CardBody>
                <CardTitle>{project.name}</CardTitle>
                <p className="description">{project.description}</p>
                <ul className="highlights" aria-label={`Project highlights for ${project.name}`}>
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <CardLink href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
                  Visit live website ↗
                </CardLink>
              </CardBody>
            </Card>
          ))}
        </Layout>
      </Container>
    </Section>
  );
}
