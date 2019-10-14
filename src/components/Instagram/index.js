import React from 'react';

import { Container, Wrapper, Card } from './styles';

const Instagram = ({ images }) => (
  <Container>
    <h1>Instagram</h1>
    <Wrapper>
      { images.map((image => {
        return <Card src={image.images.thumbnail.url} alt="" />
      })) }
    </Wrapper>
  </Container>
);

export default Instagram;
