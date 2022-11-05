import React from 'react';
import { IconContext } from 'react-icons';

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

export default Skill;
