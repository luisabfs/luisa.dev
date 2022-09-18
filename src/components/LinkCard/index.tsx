import React from 'react';

import {
  Container,
  WrapCaption,
  Link,
  Title,
  Image,
} from './styles';

interface Props {
  title: string;
  src: string;
  link: string;
}

const LinkCard = ({ title, src, link }: Props) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Image src={src} />
      <WrapCaption>
        <Title>{title}</Title>
      </WrapCaption>
    </Container>
  </Link>
);

export default LinkCard;
