import React from 'react';

import {
  Link,
  Container,
  Image,
  WrapCaption,
  Title,
  Content,
} from './styles';

const AboutCard = ({ link, img, title, content }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Image src={img} />
      <WrapCaption>
        <Title>{title}</Title>
      </WrapCaption>
      <Content>
        {content}
      </Content>
    </Container>
  </Link>
);

export default AboutCard;
