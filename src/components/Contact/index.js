import React from 'react';
import Title from '../Title';

import { Container, Form, Button } from './styles';

const Contact = () => (
  <Container>
    <Title>entre em contato</Title>
    <Form>
      <input type="text" name="name" placeholder="seu nome" />
      <input type="email" name="email" placeholder="seu melhor e-mail" />
      <textarea type="textarea" name="message" placeholder="sua mensagem" />
      <Button type="submit">enviar</Button>
    </Form>
  </Container>
);

export default Contact;
