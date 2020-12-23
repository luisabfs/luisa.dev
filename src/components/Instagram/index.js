import React, { useMemo } from 'react';

import { Container, Wrapper, Card } from './styles';

const Instagram = () => {
  const images = useMemo(() => [
    {
      link: 'https://www.instagram.com/p/BxV-4atgV9s/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/e35/58410121_357242548242868_166959381968440932_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=r_uggzDnEtUAX9zSyVa&tp=1&oh=8a4f5f31babbc2d8b1946535e735097d&oe=5FFD329B',
    },
    {
      link: 'https://www.instagram.com/p/CEr5nUQge6H/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118744860_1349636698704846_7260873186946870435_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=B5ebWwtoqckAX-IFpke&tp=1&oh=e24bf174d075e6ed37147606f93ff8bc&oe=5FFB5543',
    },
    {
      link: 'https://www.instagram.com/p/CAET6LXA0sA/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/96389077_871154283382482_4664338048801011823_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=5YTy-pFp620AX-vV8gs&tp=1&oh=4d5d52cab622c7bb0bf64ea6d4449be7&oe=5FFD5593',
    },
    {
      link: 'https://www.instagram.com/p/Bzay5QLgph4/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/65618002_146666063113655_4978077896149202644_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kQ7eNFYyOqMAX9lxfLe&tp=1&oh=a27f5b5b33d54cae76f2ce8e506bfeed&oe=5FFC86A8',
    },
    {
      link: 'https://www.instagram.com/p/B_xk9AagGV2/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95385496_1098144007234288_2361538089118759092_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=l5qFLOk07nMAX9vuxlw&tp=1&oh=2db03415db94b08f1806fa201b497e57&oe=5FFE90B1',
    },
    {
      link: 'https://www.instagram.com/p/Bxjw0r7A8UA/',
      thumbnail: 'https://instagram.faju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/59950272_1306226776195189_4542922853872950960_n.jpg?_nc_ht=instagram.faju1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3hgMVSszI2IAX8PhSCr&tp=1&oh=304f21d8dcb9ce6725ba5458cd054922&oe=5FFDF938',
    },
  ], []);

  return (
    <Container>
      <h1>Instagram</h1>
      <Wrapper>
        { images.map(((image) => (
          <Card key={Math.random()} href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.thumbnail} alt="" />
          </Card>
        ))) }
      </Wrapper>
    </Container>
  );
};

export default Instagram;
