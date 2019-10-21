import React from 'react';
import { IconContext } from 'react-icons';

import {
  Container,
  WrapCaption,
  Title,
  Content,
} from './styles';

const Profile = ({ icon, title, content }) => (
  <Container>
    <WrapCaption>
      <IconContext.Provider value={{ size: '32px', color: '#000' }}>
        {icon}
      </IconContext.Provider>
      <Title>{title}</Title>
    </WrapCaption>
    <Content>{content}</Content>
  </Container>
);

export default Profile;
