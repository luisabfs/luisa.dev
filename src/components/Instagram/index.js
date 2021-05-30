import React, { useMemo } from 'react';

import Thumb1 from '../../assets/images/instagram/instagram1.jpg';
import Thumb2 from '../../assets/images/instagram/instagram2.jpg';
import Thumb3 from '../../assets/images/instagram/instagram3.jpg';
import Thumb4 from '../../assets/images/instagram/instagram4.jpg';
import Thumb5 from '../../assets/images/instagram/instagram5.jpg';
import Thumb6 from '../../assets/images/instagram/instagram6.jpg';

import { Container, Wrapper, Card } from './styles';

const Instagram = () => {
  const images = useMemo(() => [
    {
      link: 'https://www.instagram.com/p/BxV-4atgV9s/',
      thumbnail: Thumb1,
    },
    {
      link: 'https://www.instagram.com/p/CEr5nUQge6H/',
      thumbnail: Thumb2,
    },
    {
      link: 'https://www.instagram.com/p/CAET6LXA0sA/',
      thumbnail: Thumb3,
    },
    {
      link: 'https://www.instagram.com/p/Bzay5QLgph4/',
      thumbnail: Thumb4,
    },
    {
      link: 'https://www.instagram.com/p/B_xk9AagGV2/',
      thumbnail: Thumb5,
    },
    {
      link: 'https://www.instagram.com/p/Bxjw0r7A8UA/',
      thumbnail: Thumb6,
    },
  ], []);

  return (
    <Container>
      <h1>Instagram</h1>
      <Wrapper>
        {images.map((image) => (
          <Card href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.thumbnail} alt="" />
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Instagram;
