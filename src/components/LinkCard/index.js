import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  WrapCaption,
  Link,
  Title,
  Image,
} from './styles';

const LinkCard = ({ title, src, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Image src={src} />
      <WrapCaption>
        <Title>{title}</Title>
      </WrapCaption>
    </Container>
  </Link>
);

LinkCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.element.isRequired,
};

export default LinkCard;
