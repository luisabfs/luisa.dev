import React from 'react';

import {
  Container,
  WrapCaption,
  Form,
  Name,
  Email,
  Message,
  Button,
} from './styles';

import layer from '../../assets/images/layer.png';

const Contact = () => (
  <Container>
    <WrapCaption>
      <h1>entre em contato</h1>
      <img src={layer} alt="" />
    </WrapCaption>
    <Form>
      <Name type="text" name="name" placeholder="seu nome" />
      <Email type="email" name="email" placeholder="seu melhor e-mail" />
      <Message type="textarea" name="message" placeholder="sua mensagem" />
      <Button type="submit">enviar</Button>
    </Form>
  </Container>
);

export default Contact;
