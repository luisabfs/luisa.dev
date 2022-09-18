import React from 'react';
import PropTypes from 'prop-types';
import { IconContext, IconType } from 'react-icons';

import { Container } from './styles';

interface Props {
  icon: React.ReactNode;
  color: string;
  text: string;
}

function Skill({ icon, color, text }: Props) {
  return (
    <Container>
      <IconContext.Provider
        value={{ size: '64px', color }}
      >
        {icon}
      </IconContext.Provider>
      <span>{text}</span>
    </Container>
  );
}
Skill.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Skill;
