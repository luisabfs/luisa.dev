import React from 'react';
import PropTypes from 'prop-types';

import {
  Link,
  Container,
  Image,
  Wrapper,
  WrapCaption,
  WrapImage,
  Title,
  Content,
} from './styles';

const ProjectCard = ({
  link, img, title, content,
}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      <Wrapper>
        <WrapImage>
          <Image src={img} />
        </WrapImage>
        <WrapCaption>
          <Title>{title}</Title>
          <Content>
            {content}
          </Content>
        </WrapCaption>
      </Wrapper>
    </Container>
  </Link>
);

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProjectCard;
