import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper, Card } from './styles';

const Instagram = ({ images }) => (
  <Container>
    <h1>Instagram</h1>
    <Wrapper>
      { images.map(((image) => (
        <Card href={image.link} target="_blank" rel="noopener noreferrer">
          <img src={image.images.thumbnail.url} alt="" />
        </Card>
      ))) }
    </Wrapper>
  </Container>
);

Instagram.propTypes = {
  images: PropTypes.string.isRequired,
};

export default Instagram;
