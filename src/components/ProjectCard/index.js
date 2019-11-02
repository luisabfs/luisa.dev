import React from 'react';

import {
  Link,
  Container,
  Image,
  Wrapper,
  WrapCaption,
  Title,
  Content,
} from './styles';

const AboutCard = ({ link, img, title, content }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Image src={img} />
      <Wrapper>
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

export default AboutCard;
