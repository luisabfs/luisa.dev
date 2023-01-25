import React from 'react';
import Image from 'next/image'
import layer from '../../public/assets/icons/layer.png';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return (
    <Container>
      <h1>{children}</h1>
      <Image src={layer} alt="" />
    </Container>
  );
}

export default Title;
