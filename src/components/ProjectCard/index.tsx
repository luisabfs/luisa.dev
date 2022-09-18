import React from 'react';

import {
  Link,
  Container,
  Image,
  Wrapper,
  WrapCaption,
  WrapImage,
  Title,
  Content,
} from './styles';

interface Props {
  link: string;
  img: string;
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
          <Image src={img} />
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
