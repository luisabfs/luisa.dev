import React from 'react';

import { Container, Eyebrow, Inner, MailLink } from './styles';

const Contact = () => (
  <Container id="contact" aria-labelledby="contact-title">
    <Inner>
      <Eyebrow>03 / Let&apos;s connect</Eyebrow>
      <h2 id="contact-title">Let&apos;s build something great together.</h2>
      <p className="contact-description">
        Open to interesting opportunities, creative collaborations, and conversations about technology.
      </p>
      <MailLink href="mailto:luisa.barros.dev@gmail.com">Say hello <span aria-hidden="true">↗</span></MailLink>
    </Inner>
  </Container>
);

export default Contact;
