import React from 'react';
import { StaticImageData } from 'next/image'

import {
  Link,
  Container,
  Thumb,
  Wrapper,
  WrapCaption,
  WrapImage,
  Title,
  Content,
} from './styles';

interface Props {
  link: string;
  img: StaticImageData;
  title: string;
  content: React.ReactNode;
}

const ProjectCard = ({
  link, img, title, content,
}: Props) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Wrapper>
        <WrapImage>
          <Thumb src={img} alt="" />
        </WrapImage>
        <WrapCaption>
          <Title>{title}</Title>
          <Content>
            {content}
          </Content>
        </WrapCaption>
      </Wrapper>
    </Container>
  </Link>
);

export default ProjectCard;
