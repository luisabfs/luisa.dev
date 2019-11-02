import React from 'react';

import {
  Container,
  Image,
  WrapCaption,
  Title,
  Content,
} from './styles';

const AboutCard = ({ img, title, content }) => (
  <Container>
    <Image src={img} />
    <WrapCaption>
      <Title>{title}</Title>
    </WrapCaption>
    <Content>
      {content}
    </Content>
  </Container>
);

export default AboutCard;
