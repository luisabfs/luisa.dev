import React, { useMemo } from 'react';
import Image from 'next/image'

import Thumb1 from '../../public/assets/images/instagram/instagram1.jpg';
import Thumb2 from '../../public/assets/images/instagram/instagram2.jpg';
import Thumb3 from '../../public/assets/images/instagram/instagram3.jpg';
import Thumb4 from '../../public/assets/images/instagram/instagram4.jpg';
import Thumb6 from '../../public/assets/images/instagram/instagram6.jpg';
import Thumb7 from '../../public/assets/images/instagram/instagram7.jpg';

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
      link: 'https://www.instagram.com/p/CSxyTlFDKGR/',
      thumbnail: Thumb7,
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
          <Card key={image.link} href={image.link} target="_blank" rel="noopener noreferrer">
            <Image src={image.thumbnail} alt="" />
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Instagram;
