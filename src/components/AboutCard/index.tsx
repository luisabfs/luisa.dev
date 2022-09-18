import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';

import {
  Container,
  WrapCaption,
  Title,
  Content,
} from './styles';

interface Props {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const AboutCard = ({ icon, title, content }: Props) => (
  <Container>
    <WrapCaption>
      <IconContext.Provider value={{ size: '32px', color: '#000' }}>
        {icon}
      </IconContext.Provider>
      <Title>{title}</Title>
    </WrapCaption>
    <Content>
      {content}
    </Content>
  </Container>
);

AboutCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AboutCard;
