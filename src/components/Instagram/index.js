import React from 'react';

import { Container, Wrapper, Card } from './styles';

const Instagram = ({ images }) => (
  <Container>
    <h1>Instagram</h1>
    <Wrapper>
      { images.map(((image) => (
        <Card href={image.link}>
          <img src={image.images.thumbnail.url} alt="" />
        </Card>
      ))) }
    </Wrapper>
  </Container>
);

export default Instagram;
