import React from 'react';
import Image from 'next/image'
import layer from '../../public/assets/icons/layer.png';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  color?: string;
  showImage?: boolean;
}

function Title({ children, color = '#000', showImage = true }: Props) {
  return (
    <Container color={color}>
      <h1>{children}</h1>
     {showImage ? <Image src={layer} alt="" /> : null}
    </Container>
  );
}

export default Title;
